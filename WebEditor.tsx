// import React, {useState} from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import RichTextEditor from 'react-rte';
// // import { Editor } from 'react-draft-wysiwyg';
// // import 'WebEditor.css'

// const WebEditor = () => {

//     const toolbarConfig = {
//         // Optionally specify the groups to display (displayed in the order listed).
//         display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
//         INLINE_STYLE_BUTTONS: [
//           {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
//           {label: 'Italic', style: 'ITALIC'},
//           {label: 'Underline', style: 'UNDERLINE'}
//         ],
//         BLOCK_TYPE_DROPDOWN: [
//           {label: 'Normal', style: 'unstyled'},
//           {label: 'Heading Large', style: 'header-one'},
//           {label: 'Heading Medium', style: 'header-two'},
//           {label: 'Heading Small', style: 'header-three'}
//         ],
//         BLOCK_TYPE_BUTTONS: [
//           {label: 'UL', style: 'unordered-list-item'},
//           {label: 'OL', style: 'ordered-list-item'}
//         ]
//       };

//     return(
//         <RichTextEditor toolbarConfig={toolbarConfig} />
//     )

// //     const [nContentState, setNContentState] = useState()
// //     const display =()=>{
// //         setNContentState(nContentState)
// //         console.log(JSON.stringify(nContentState), "Data")
// //     }

// //     return (
// //         <View>
// //             <View>
// //         <Editor
// //         defaultContentState={nContentState}
// //         // onContentStateChange={setNContentState}
// //         toolbarOnFocus
// //         wrapperClassName='wrapper-class'
// //         editorClassName='editor-class'
// //         toolbarClassName='toolbar-class'
// //         placeholder='Add a Description'
// //         mention={{
// //             seperator : ' ',
// //             trigger : "@",
// //             suggestions : [
// //             {text : "Rohit", value : 'rohit'},
// //             ]
// //         }}
// //         /></View>
// //         <View>
// //         <TouchableOpacity onPress={display} style={styles.button}><Text>Log data</Text></TouchableOpacity>
// //         </View>
// //         </View>
// //     )
// }

// export default WebEditor

// // const styles = StyleSheet.create({
// //     button:{
// //         color:'black',
// //         borderRadius:40,
// //         backgroundColor:"grey",
// //         maxWidth:60
// //     }
// // })

// // import { View } from "react-native";
// // import React, {useState} from 'react'
// // import Draft, 
// //     {htmlToDraft, 
// //     draftToHtml, 
// //     draftStateToHTML, 
// //     draftToRaw, 
// //     EmptyState, 
// //     rawToDraft} from "react-wysiwyg-typescript";

// // const WebEditor=()=>{

// //     const [editorstate, setEditorState] = useState()
// //     return(
// //         <View>
// //             <Draft
// //                 editorState={editorstate}
// //                 onEditorStateChange={}/>
// //         </View>
// //     )
// // }

// // export default WebEditor;

// import React, {useState} from 'react';
// import RichTextEditor, { EditorValue } from 'react-rte';
// import {Mention, MentionsInput} from 'react-mentions';
// import { View } from 'react-native';
// const WebEditor=(props)=>{
//     const [input, setInput] = useState('')
//     const users = [
//         {
//           id: "isaac",
//           display: "Isaac Newton",
//         },
//         {
//           id: "sam",
//           display: "Sam Victor",
//         },
//         {
//           id: "emma",
//           display: "emmanuel@nobody.com",
//         },
//       ];

//     const [value, setValue] = useState(RichTextEditor.createEmptyValue());
//     const handleChange=(value: React.SetStateAction<EditorValue>)=>{
//         setValue(value);
//         console.log(value, "value")
//         if(props.handleChange){
//             props.handleChange(value.toString('html'));
//         }
//     }
//     return (
//     <View>
//         <RichTextEditor value={value} onChange={handleChange}/>
//         <MentionsInput value={input} onChange={(e)=>setInput(e.target.value)}>
//             <Mention trigger="@" data={users}/>
//         </MentionsInput>
//     </View>)
// }

// export default WebEditor;

import React, { useState, useMemo } from "react";
import {RichTextEditor} from '@mantine/rte'

const people = [
    { id: 1, value: 'Bill Horsefighter' },
    { id: 2, value: 'Amanda Hijacker' },
    { id: 3, value: 'Leo Summerhalter' },
    { id: 4, value: 'Jane Sinkspitter' },
  ];

          const tags = [
            { id: 1, value: 'JavaScript' },
            { id: 2, value: 'TypeScript' },
            { id: 3, value: 'Ruby' },
            { id: 3, value: 'Python' },
          ];

const WebEditor = () =>{
    const [value, setValue] = useState('')
    const mentions = useMemo(
        () => ({
          allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
          mentionDenotationChars: ['@', '#'],
          source: (searchTerm: string, renderList: (arg0: { id: number; value: string; }[]) => void, mentionChar: string) => {
            const list = mentionChar === '@' ? people : tags;
            const includesSearchTerm = list.filter((item) =>
              item.value.toLowerCase().includes(searchTerm.toLowerCase())
            );
            renderList(includesSearchTerm);
          },
        }),
        []
      );
    
      return (
        <RichTextEditor
          id="rte"
          value={value}
          onChange={setValue}
          placeholder="Type @ or # to see mentions autocomplete"
          mentions={mentions}
        />
      );
}

export default WebEditor;
