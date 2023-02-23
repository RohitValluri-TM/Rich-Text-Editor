import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView,Pressable, SafeAreaView, Platform, Button  } from 'react-native'
import {RichEditor, RichToolbar, actions, RichEditorProps} from 'react-native-pell-rich-editor';
import React, {useRef, useState} from 'react'
// import { mentions } from './WebEditor';
// import TextArea from 'react-mention-plugin'
// import { Mention, MentionsInput } from 'react-mentions';
// import MentionsTextInput from 'react-native-mentions'
// import Mentions from 'rc-mentions';
import {MentionInput, MentionSuggestionsProps, Suggestion} from 'react-native-controlled-mentions'

const NativeEditor : React.FC<RichEditorProps> = () => {
    const [input, setInput] = useState('<ol><li>sfsdffjkerfsdf<i style="color:red;">sdff</i><br></li></ol>')

	const richText = useRef();
    const display = ()=>{
        // Alert.alert(richText)
       console.log(input, "input")
    }
    // const [value, setValue] = useState('Hello @[Mary](2)! How are you?');

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
                        initialContentHTML={input}
                        onChange={(value)=>setInput(value)}
                    />
                    
                </KeyboardAvoidingView>
            </ScrollView>
            
            <View><Button title='Save' onPress={display}/></View>
        </SafeAreaView>
    );
};

export default NativeEditor;
const styles = StyleSheet.create({})