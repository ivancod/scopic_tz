import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Item, Label, Input } from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addAction from '../store/actions/addAction';


 class List extends React.Component {
    constructor(props){ 
        super(props);
        this.state = { text:'' };
    }
    showList = () => {
        return this.props.list.map((item) => {
            return (
                <View>
                    <Text key={ item.id } style={ styles.paragraph }>{ item.text }</Text> 
                    <Text style={{ backgroundColor:'#555', width:300, height: 1 }}></Text>
                </View>
            );
        });
    } 
    hadleInput = () => {
        let str = this.state.text.replace(/(^\s*)|(\s*)$/g, '');
        str = str[0].toUpperCase() + str.slice(1);
        if(str !== ''){
            this.props.addItem( str.replace(/\s+/g, ' ') );
        } else {
            alert('Please enter text');
        }
    } 
    render() {
        return (
            <View>
                { this.showList() }
                <Item floatingLabel style={ styles.input }>
                    <Label>New item</Label>
                    <Input  autoCorrent="false" autoCapitalize="none" onChangeText={( text ) => this.setState({ text })} />
                </Item>
                <Text style={ styles.add_btn } onPress={() => this.hadleInput() }>Add item</Text>
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
        list: state.list
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({ addItem: addAction }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(List);

const styles = StyleSheet.create({
    paragraph: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    add_btn: {
        margin: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 24,
        lineHeight: 50,
        borderRadius: 10,
        backgroundColor: '#c10831',
        width: 150,
        height: 50,
        color: 'white'
    },
    input: {
        marginTop: 15
    }
});