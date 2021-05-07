/* eslint-disable react-hooks/exhaustive-deps */
import { default as React, useEffect, useRef } from 'react';

// Imports EditorJS y pluggins
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
import Timeline from './tools/timeline/tool';
import Quote from '@editorjs/quote';
import List from '@editorjs/list';
import ImageTool from '@editorjs/image';
import Underline from '@editorjs/underline';
import Checklist from '@editorjs/checklist';
import SocialPost from 'editorjs-social-post-plugin';
import Embed from '@editorjs/embed';
import Delimiter from '@editorjs/delimiter';
import Button from './tools/button/tool'

const editorContent = {
  "time": 1619782716489,
  "blocks": [
      {
          "type": "header",
          "data": {
              "text": "Creador de Landing Page",
              "level": 1
          }
      },
      {
        "type": "button",
        "data": {
            "linkURL": "123123",
            "linkName": "eqweqwe",
            "editing": false
        }
    },
      {
          "type": "paragraph",
          "data": {
              "text": "Pruebas entre JS Vanilla y React"
          }
      },
      {
          "type": "paragraph",
          "data": {
              "text": "A ver que tal sale el traspaso"
          }
      },
      {
          "type": "timeline",
          "data": {
              "events": [
                  {
                      "time": "08:00",
                      "description": "Momento en el que imprimo un timeline"
                  },
                  {
                      "time": "12:50",
                      "description": "A ver si cuaja"
                  }
              ]
          }
      },
      {
          "type": "socialPost",
          "data": {
              "socialMediaPlatform": "Twitter",
              "url": "https://twitter.com/Lostes95/status/1388089592407109635",
              "caption": "Tweet de prueba"
          }
      },
      {
          "type": "delimiter",
          "data": {}
      },
      {
          "type": "list",
          "data": {
              "style": "ordered",
              "items": [
                  "Ver como funcionan&nbsp;",
                  "las listar numeradas",
                  "en el JSON&nbsp;"
              ]
          }
      },
      {
          "type": "checklist",
          "data": {
              "items": [
                  {
                      "text": "Elemento sin check",
                      "checked": false
                  },
                  {
                      "text": "Elemento con check",
                      "checked": true
                  }
              ]
          }
      },
      {
          "type": "quote",
          "data": {
              "text": "Esto tiene que salir para adelante",
              "caption": "Yo",
              "alignment": "left"
          }
      },
      {
          "type": "embed",
          "data": {
              "service": "youtube",
              "source": "https://www.youtube.com/watch?v=UZw-CU32Uqc&ab_channel=RockCollection",
              "embed": "https://www.youtube.com/embed/UZw-CU32Uqc?",
              "width": 580,
              "height": 320,
              "caption": "Video de prueba"
          }
      }
  ],
  "version": "2.20.2"
}

// Aqui mostramos los datos con los que comienza el editor:
const DEFAULT_INITIAL_DATA = () => {
  return editorContent;
}

const EDITTOR_HOLDER_ID = 'editorjs';

const Editor = (props) => {
  const ejInstance = useRef();
  const [editorData, setEditorData] = React.useState(DEFAULT_INITIAL_DATA);

  // Permite usar los metodos del editor:
  const [editorConf, setConfEditor] = React.useState(undefined);

  const [cont, setCont] = React.useState(0);

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
        underline: Underline,
        socialPost: SocialPost,
        delimiter: Delimiter,
        button: Button,
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              coub: true
            }
          }
        },      
        list: {
          class: List,
          inlineToolbar: true,
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
              byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
            }
          }
        },
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
    setConfEditor(editor);
  };

  return (
    <React.Fragment>
      <div id={EDITTOR_HOLDER_ID}> </div>
      <button id={cont} onClick={ function() {
              editorConf.save().then(savedData => {
                console.log(JSON.stringify(savedData, null, 4));
              });
              setCont(1);
      }}>Imprimir estructura</button>
    </React.Fragment>
  );
}

export default Editor;