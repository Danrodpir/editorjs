/* eslint-disable react-hooks/exhaustive-deps */
import { default as React, useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
import Timeline from './tools/timeline/tool';
import Quote from '@editorjs/quote';

const DEFAULT_INITIAL_DATA = () => {
  return {
    "time": new Date().getTime(),
    "blocks": [
      {
        "type": "header",
        "data": {
          "text": "Creador de Landing Page",
          "level": 1
        }
      },
    ]
  }
}

const EDITTOR_HOLDER_ID = 'editorjs';

const Editor = (props) => {
  const ejInstance = useRef();
  const [editorData, setEditorData] = React.useState(DEFAULT_INITIAL_DATA);

  // This will run only once
  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      ejInstance.current.destroy();
      ejInstance.current = null;
    }
  }, []);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      logLevel: "ERROR",
      data: editorData,
      onReady: () => {
        ejInstance.current = editor;
      },
      onChange: async () => {
        let content = await this.editorjs.saver.save();
        // Put your logic here to save this data to your DB
        setEditorData(content);
      },
      autofocus: true,
      tools: { 
        header: Header, 
        timeline: Timeline,
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+O',
          config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: 'Quote\'s author',
          },
        },    
      }, 
    });
  };

  return (
    <React.Fragment>
      <div id={EDITTOR_HOLDER_ID}> </div>
    </React.Fragment>
  );
}

export default Editor;