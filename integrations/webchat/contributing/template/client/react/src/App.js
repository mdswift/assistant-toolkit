import './App.css';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { withWebChat } from '@ibm-watson/assistant-web-chat-react';
import { config } from './config';

/**
 * This example uses the `@ibm-watson/assistant-web-chat-react` library to import web chat into a React application.
 *
 * See https://www.npmjs.com/package/@ibm-watson/assistant-web-chat-react.
 *
 * TODO: ADD A COMMENT HERE ABOUT HOW TO FIND THE SPECIAL CODE YOU HAVE ADDED FOR THIS EXAMPLE.
 */

function App({ createWebChatInstance }) {
  useEffect(() => {
    function onWebChatLoad(instance) {
      instance.render();
    }

    // Add the onLoad handler to the existing web chat options in the external config.js file.
    const webChatOptions = {
      ...config,
      onLoad: onWebChatLoad,
    };

    createWebChatInstance(webChatOptions);
  }, []);
  return <div className="App">Hello World!</div>;
}

App.propTypes = {
  createWebChatInstance: PropTypes.func.isRequired,
};

export default withWebChat()(App);
