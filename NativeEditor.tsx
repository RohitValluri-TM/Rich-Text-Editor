import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, SafeAreaView, Platform  } from 'react-native'
import {RichEditor, RichToolbar, actions, RichEditorProps} from 'react-native-pell-rich-editor';
import React, {useRef} from 'react'

const NativeEditor : React.FC<RichEditorProps> = () => {
	const richText = useRef();
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
        </SafeAreaView>
    );
};

export default NativeEditor;
const styles = StyleSheet.create({})