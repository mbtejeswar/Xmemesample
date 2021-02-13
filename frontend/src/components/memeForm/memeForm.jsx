import { Button, Form , Message} from "semantic-ui-react";
import { React, useState } from "react";
import classes from './styles.module.css';
import {message} from 'antd'



const MemeForm = (props) => {
  /**
   * @property {string} memeOwner
   * stores the value of memeOwner on change in input box
   * @property {string} caption
   * caption is stored in caption variable onchange
   * @property {string} memeUrl 
   */
  const [memeOwner, setMemeOwner] = useState("");
  const [caption, setMemeCaption] = useState("");
  const [memeUrl, setmemeUrl] = useState("");

  const setValue = (event) => {
    switch (event.target.name) {
      case "owner":
        setMemeOwner(event.target.value);
        break;
      case "caption":
        setMemeCaption(event.target.value);
        break;
      case "url":
        setmemeUrl(event.target.value);
        break;
    }
  };

  /**
   * 
   * @param {boolean} error 
   * boolean value to store the error flag of API call 
   * @param {object} response 
   * Input response to check validation
   */
  const checkValidation = (error, response)=>{
    if(!error){
      return true
    }
  }

  /**
   * Clear all the input values on submit
   */

  const clearValues = ()=>{
    setMemeOwner('')
    setMemeCaption('')
    setmemeUrl('')
  }

  const formValidation =()=>{
    if(memeOwner!=="" && memeUrl!="" && caption!=""){
      return true 
    } else {
      message.error('All fields are mandatory. Please check again and submit')
    
      return false
    };
  }
  /**
   * Submit the meme on Submit button to backend
   */
  const submitMeme = () => {
    let validation = formValidation();
    
    let postData = {name:memeOwner, url:memeUrl,caption:caption}
    if(validation){
      props.submitMeme(postData);
    }
    
    clearValues();
  };
  return (
    <Form className={classes['form']}>
  
      <Form.Field>
        <label>Meme Owner</label>
        <input
          value={memeOwner}
          name="owner"
          onChange={setValue}
          placeholder="Enter your full name"
        />
        
      </Form.Field>
      <Form.Field>
        <label>Caption</label>
        <input
          value={caption}
          name="caption"
          onChange={setValue}
          placeholder="Be Creative with caption"
        />
      </Form.Field>
      <Form.Field>
        <label>Meme URL</label>
        <input
          value={memeUrl}
          name="url"
          onChange={setValue}
          placeholder="Enter URL of your meme here"
        />
      </Form.Field>
      <Message
      warning
      header='Could you check something!'
      list={[
        'That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.',
      ]}
    />
      <Button onClick={submitMeme} type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MemeForm;
