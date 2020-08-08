import React from "react";
import Web3 from "web3";
import TruffleContract from "truffle-contract";
import Election from "./contracts/Election.json";

class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "0x0",
      candidates: [],
      hasVoted: false,
      loading: true,
      voting: false
    };

    if (typeof web3 != "undefined") {
      this.web3Provider = web3.currentProvider;
    } else {
      this.web3Provider = new Web3.providers.HttpProvider(
        "http://localhost:7545"
      );
    }

    this.web3 = new Web3(this.web3Provider);

    this.election = TruffleContract(Election);
    this.election.setProvider(this.web3Provider);

    this.castVote = this.castVote.bind(this);
    this.watchEvents = this.watchEvents.bind(this);
  }

  componentDidMount() {
    // TODO: Refactor with promise chain
    this.web3.eth.getCoinbase((err, account) => {
      this.setState({ account });
      this.election.deployed().then(electionInstance => {
        this.electionInstance = electionInstance;
        this.watchEvents();
        this.electionInstance.candidatesCount().then(candidatesCount => {
          for (var i = 1; i <= candidatesCount; i++) {
            this.electionInstance.candidates(i).then(candidate => {
              const candidates = [...this.state.candidates];
              candidates.push({
                id: candidate[0],
                name: candidate[1],
                voteCount: candidate[2]
              });
              this.setState({ candidates: candidates });
            });
          }
        });
        this.electionInstance.voters(this.state.account).then(hasVoted => {
          this.setState({ hasVoted, loading: false });
        });
      });
    });
  }

  watchEvents() {
    // TODO: trigger event when vote is counted, not when component renders
    this.electionInstance
      .votedEvent(
        {},
        {
          fromBlock: 0,
          toBlock: "latest"
        }
      )
      .watch((error, event) => {
        this.setState({ voting: false });
      });
  }

  castVote(candidateId) {
    this.setState({ voting: true });
    this.electionInstance
      .vote(candidateId, { from: this.state.account })
      .then(result => this.setState({ hasVoted: true }));
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1>Election Results</h1>
          <br />
          {this.state.loading || this.state.voting ? (
            <p className="text-center">Loading...</p>
          ) : (
            <Content
              account={this.state.account}
              candidates={this.state.candidates}
              hasVoted={this.state.hasVoted}
              castVote={this.castVote}
            />
          )}
        </div>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <Table candidates={this.props.candidates} />
        <hr />
        {!this.props.hasVoted ? (
          <Form
            candidates={this.props.candidates}
            castVote={this.props.castVote}
          />
        ) : null}
        <p>Your account: {this.props.account}</p>
      </div>
    );
  }
}

class from extends React.Component {
  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          this.props.castVote(this.candidateId.value);
        }}
      >
        <div className="form-group">
          <label>Select Candidate</label>
          <select
            ref={input => (this.candidateId = input)}
            className="form-control"
          >
            {this.props.candidates.map(candidate => {
              return <option value={candidate.id}>{candidate.name}</option>;
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Vote
        </button>
        <hr />
      </form>
    );
  }
}

class Table extends React.Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {this.props.candidates.map(candidate => {
            return (
              <tr>
                <th>{candidate.id.toNumber()}</th>
                <td>{candidate.name}</td>
                <td>{candidate.voteCount.toNumber()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Vote;
