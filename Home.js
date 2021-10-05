import React, { useState, useEffect, Fragment } from "react";
import { Button, Grid } from "@material-ui/core";
import axios from "axios";
import EachCard from "../CardTemplate/EachCard";
import { lightBlue } from "@material-ui/core/colors";
import './Box.css';

function Home() {
  const [text, setText] = useState("");
  const [posts, setPost] = useState([{}]);

  const mockArticle = {
    title: "Taliban Crack Down on Protests, Hamper Kabul Evacuations",
    passage:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  useEffect(() => {
    const allFetchedPosts = [];
    const fetchData = async () => {
      const responseData = await axios(
        "https://hackaton-act-default-rtdb.firebaseio.com/posts.json"
      );
      for (let i in responseData.data) {
        allFetchedPosts.push(responseData.data[i]);
      }
      setPost(allFetchedPosts);
    };
    fetchData();
  }, [posts]);

  // onChangeHandler function sends post request to the server
  const onChangeHandler = (e) => {
    e.preventDefault();
    const postData = {
      text,
    };
    axios
      .post(
        "https://hackaton-act-default-rtdb.firebaseio.com/posts.json",
        postData
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={6}>
          <section >
            <h2 className = "title">{mockArticle.title}</h2>
            <p className = "content">{mockArticle.passage}</p>
          </section>
        </Grid>
        <Grid item xs={6}>
          <form>
            <label style={{background:lightBlue,
            paddingTop:"20vh",
            justifyContent: "center",
            position:"right",
            styleMedia:"italic",}}>Summary</label>
            <input style={{background:lightBlue,
            paddingTop:"10vh",
    width: "500px",
    height: "300px",
    padding: "50px",
    margin: "20px"}}
              onChange={(event) => setText(event.target.value)}
              type="text"
            />
            <Button className = "content" onClick={onChangeHandler} type="submit">
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>

      {/* If someone already added their sample essays, it will render each post in p tag*/}
      {typeof posts == "undefined" ? (
        <p>Loading ...</p>
      ) : (
        posts.map((post, i) => (
          <Grid className="grid" container spacing={3}>
            <Grid  item xs={12} sm={4} >
              <EachCard  className = "box" key={i} title={i} text={post.text} />
            </Grid>
          </Grid>
        ))
      )}
    </Fragment>
  );
}

export default Home;
