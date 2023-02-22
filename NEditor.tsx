// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useRef, useState } from 'react'
// import { RichTextEditor, RichTextToolbar, ACTIONS } from 'react-native-zss-rich-text-editor'

// const NativeEditor = () => {

//     const richText = useRef()

//     const [desContent, setDesContent] = useState("")

//     const handleText=(text)=>{
//         if(text){
//             setDesContent(text);
//         }
//         else{
//             setDesContent("")
//         }
//     }

//   return (
//     <View>
//       {/* <Text>NativeEditor</Text> */}
//       <RichTextEditor
//         // ref={(r)=>this.richtext = r}
        
//         contentPlaceholder={'Type your post here...'}
//         hiddenTitle={true}
//         initialContentHTML={''}
//         // editorInitializedCallback={onEditorInitialized}
//     />
//     <RichTextToolbar
//         // getEditor={richText}
//         iconTint='black'
//         selectedButtonStyle={{backgroundColor:'#51671d'}}
//         actions={[
//                       ACTIONS.insertImage,
//                       ACTIONS.setBold,
//                       ACTIONS.setItalic,
//                       ACTIONS.insertLink,
//                       ACTIONS.insertBulletsList,
//                       ACTIONS.insertOrderedList,
//                   ]}
//     />
//     </View>
//   )
// }

// export default NativeEditor

// // const styles = StyleSheet.create({})

// // import { View, Text, StyleSheet, ScrollView } from 'react-native'
// // import React, { useRef, useState } from 'react'
// // import { RichEditor,RichToolbar, ACTIONS } from 'react-native-pell-rich-editor'
// // import { HtmlEditor, Inject, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

// // const NativeEditor = () => {

// //     let toolbarSettings: object = {
// //         items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
// //               'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
// //               'LowerCase', 'UpperCase', '|',
// //               'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
// //               'Outdent', 'Indent', '|',
// //               'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
// //               'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
// //       }
// // //     const richText = useRef()
// // //     const [content, setContent] = useState("")

// // //     const richEditorText=(text)=>{
// // //         if(text){
// // //             setContent(text)
// // //         }
// // //     }
// // //   return (
// // //     <View style={styles.container}>
// // //         <Text>Native Editor</Text>
// // //         <ScrollView>
// // //         <RichEditor
// // //         ref={richText}
// // //         initialContentHTML={content}
// // //         onChange={richEditorText}
// // //         androidHardwareAccelerationDisabled={true}
// // //         placeholder="Type Here"/>
// // //         </ScrollView>
// // //         <RichToolbar
// // //         editor={richText}
// // //         selectedIconTint="#873c1e"
// // //         iconTint="#312921"
// // //         ACTIONS={[
// // //             ACTIONS.insertImage,
// // //             ACTIONS.setBold,
// // //             ACTIONS.setItalic,
// // //             ACTIONS.insertLink,
// // //             ACTIONS.insertBulletsList,
// // //             ACTIONS.insertOrderedList,
// // //         ]}/>
// // //     </View>
// // //   )

// // return(
// //     <RichTextEditorComponent height={450} toolbarSettings={toolbarSettings}>
// //         <Inject services={[Toolbar,HtmlEditor]}/>
// //     </RichTextEditorComponent>
// // )
// // }

// // export default NativeEditor

// // const styles = StyleSheet.create({
// //     container:{
// //         flex:1
// //     },
// // })

// // import React, { Component } from 'react';
// // import ReactQuill from 'react-quill';
// // import 'react-quill/dist/quill.snow.css';
// // import 'react-quill/dist/quill.bubble.css';

// // const RichTextEditor =()=> {
// // 	// constructor(props) {
// // 	// 	super(props);

// // 		const modules = {
// // 			toolbar: [
// // 		      [{ 'font': [] }],
// // 		      [{ 'size': ['small', false, 'large', 'huge'] }],
// // 		      ['bold', 'italic', 'underline'],
// // 		      [{'list': 'ordered'}, {'list': 'bullet'}],
// // 		      [{ 'align': [] }],
// // 		      [{ 'color': [] }, { 'background': [] }],
// // 		      ['clean']
// // 		    ]
// // 		};

// // 		const formats = [
// // 		    'font',
// // 		    'size',
// // 		    'bold', 'italic', 'underline',
// // 		    'list', 'bullet',
// // 		    'align',
// // 		    'color', 'background'
// // 	  	];

// // 	  // 	this.state = {
// // 		// 	comments: ''
// // 		// }
// //       const [comments, setComments] = React.useState()
// // 	// 	this.rteChange = this.rteChange.bind(this);
// // 	// }

// // 	const rteChange = (content, delta, source, editor) => {
// // 		console.log(editor.getHTML()); // rich text
// // 		console.log(editor.getText()); // plain text
// // 		console.log(editor.getLength()); // number of characters
// // 	}

// // 	    return (
// // 	      <div>
// // 	        <ReactQuill  modules={modules}
// // 				formats={formats} onChange={rteChange}
// // 			value={comments || ''}/>
// // 	      </div>
// // 	    );
	

// // }

// // export default RichTextEditor;
