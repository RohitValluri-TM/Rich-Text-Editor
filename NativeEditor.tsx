import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, SafeAreaView, Platform, Button  } from 'react-native'
import {RichEditor, RichToolbar, actions, RichEditorProps} from 'react-native-pell-rich-editor';
import React, {useRef, useState} from 'react'
// import { mentions } from './WebEditor';
// import TextArea from 'react-mention-plugin'
import { Mention, MentionsInput } from 'react-mentions';
import MentionsTextInput from 'react-native-mentions'

const NativeEditor : React.FC<RichEditorProps> = () => {
    const [input, setInput] = useState('')
const suggestions = [
  {
    id: 1,
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    value: 'Fred_Smith',
    label: 'Fred Smith',
  },
  {
    id: 2,
    avatar: 'https://randomuser.me/api/portraits/men/59.jpg',
    value: 'Ronald_Horn',
    label: 'Ronald Horn',
  }
];
	const richText = useRef();
    const display = ()=>{
        console.log(richText, "rich")
    }
	return (
        <SafeAreaView>            
            <RichToolbar
                editor={richText}
                
                actions={[
                    actions.insertImage,
                    actions.setBold,
                    actions.setItalic,
                    actions.insertBulletsList,
                    actions.insertOrderedList,
                    actions.insertLink,
                    actions.keyboard,
                    actions.setStrikethrough,
                    actions.setUnderline,
                    actions.removeFormat,
                    actions.insertVideo,
                    actions.checkboxList,
                    actions.undo,
                    actions.redo,
                ]}
                iconMap={{ [actions.heading1]: ({tintColor}) => (<Text style={[{color: tintColor}]}>H1</Text>), }}
            />
            <ScrollView style={{height:50}}>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}	style={{ flex: 1 }}>
                    <RichEditor
                        ref={richText}
                        placeholder="Type Here"
                        
                        onChange={ descriptionText => {
                            console.log("descriptionText:", descriptionText);
                        }}
                    />
                    
                </KeyboardAvoidingView>
            </ScrollView>
            <MentionsInput value={input} onChange={(e)=>setInput(e.target.value)}>
                    <Mention trigger="@" data={suggestions}></Mention>
                    </MentionsInput>
            <View><Button title='Save' onPress={display}/></View>
        </SafeAreaView>
    );
};

export default NativeEditor;
const styles = StyleSheet.create({})