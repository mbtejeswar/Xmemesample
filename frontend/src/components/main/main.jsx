import React from "react";
import MemeCard from "../memeCard/memeCard";
import MemeList from "../memeList/memeList";
import MemeForm from "../memeForm/memeForm";
import { Container } from "semantic-ui-react";
import classes from "./styles.module.css";
import Navbar from "../common/navbar/navbar";

class Main extends React.Component {
  /**
   * @property {boolean} state.loading
   * Indicates the state of application side effects/API calls
   * @property {array} state.firstHundredMemes
   * First Hundred memes will be set to this
   */

  state = {
    loading: false,
    firstHundredMemes: null,
  };
  /**
   *
   * @param {boolean} error
   * Boolean value indicating whether any error during the web service call
   * @param {object} response
   * Response from the web service
   */
  checkValidation = (error, response) => {
    if (!error) {
      return true;
    }
  };
  /**
   * Loading on the initial mount of component
   */
  componentDidMount() {
    this.fetchFirstHundredMemes();
  }
  /**
   * API call to fetch first 100 memes
   */

  fetchFirstHundredMemes = () => {
    fetch(encodeURI(`http://localhost:8081/memes`))
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        this.setState({ firstHundredMemes: response });
      })
      .catch((err) => {
        console.log(`Error occured during fetch ${err}`);
      });
  };

  /**
   *
   * @param {object} postData
   * gets the data to be sent to backend
   */
  submitMeme = async (postData) => {
    this.setState({ loading: true });

    const memes = await fetch(encodeURI(`http://localhost:8081/memes`), {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    })
      .then((res) => {
        return res.json();
      })
      .then((resJSON) => {
        let valResult = this.checkValidation(false, resJSON);
        if (valResult) {
          // clearValues()

          return resJSON;
        }
      })
      .catch((err) => {
        this.setState({ loading: false });
        console.log(`Error occured during fetch api`);
      });
    this.fetchFirstHundredMemes();
  };

  render() {
    return (
      <div className={classes["mainContainer"]}>
        <Navbar items={["Login", "Register"]} />
        <div className={classes.container}>
          <MemeForm submitMeme={this.submitMeme} />
          <div className={classes.memeListContainer}>
            {this.state.firstHundredMemes ? (
              <MemeList firstHundredMemes={this.state.firstHundredMemes} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
