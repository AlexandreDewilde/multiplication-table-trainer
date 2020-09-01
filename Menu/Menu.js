import React, {useState} from 'react'
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import { t } from 'i18n-js';
import i18n from '../i18n'

function Menu(props) {
    const [itemsSelected, setItemsSelected] = useState([]);

    const _toggleItem = (cat) => {
        let index = itemsSelected.indexOf(cat);
        if (index !== -1) {
            let itemsSelectedArr = [...itemsSelected];
            itemsSelectedArr.splice(index, 1);
            setItemsSelected(itemsSelectedArr);
        }
        else {
            let itemsSelectedArr = [...itemsSelected];
            itemsSelectedArr.push(cat);
            setItemsSelected(itemsSelectedArr);
        }
    }

    return(
        <View style={styles.main_container} i18n={i18n}>
            <View style={styles.title_container}>
                <View style={styles.title_bar} />
                    <Text style={styles.title_text}>{t('choose_categories')}</Text>
                <View style={styles.title_bar} />
            </View>
            <View style={styles.category_container}>
                <View style={styles.rows_cat}>
                    <TouchableOpacity style={{...styles.category_button, borderLeftWidth:0}} onPress={() => _toggleItem(2)}>
                        <View style={[{padding:20}, itemsSelected.includes(2) && styles.category_button_clicked]}>
                            <Text style={styles.category_text}>2 x ....</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category_button} onPress={() => _toggleItem(3)}>
                        <View style={[{padding:20}, itemsSelected.includes(3) && styles.category_button_clicked]}>
                            <Text style={styles.category_text}>3 x ....</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category_button} onPress={() => _toggleItem(4)}>
                        <View style={[{padding:20}, itemsSelected.includes(4) && styles.category_button_clicked]}>
                            <Text style={styles.category_text}>4 x ....</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.rows_cat}>
                    <TouchableOpacity style={{...styles.category_button, borderLeftWidth:0}} onPress={() => _toggleItem(5)}>
                        <View style={[{padding:20}, itemsSelected.includes(5) && styles.category_button_clicked]}>
                            <Text style={styles.category_text}>5 x ....</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category_button} onPress={() => _toggleItem(6)}>
                        <View style={[{padding:20}, itemsSelected.includes(6) && styles.category_button_clicked]}>
                            <Text style={styles.category_text}>6 x ....</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category_button} onPress={() => _toggleItem(7)}>
                        <View style={[{padding:20}, itemsSelected.includes(7) && styles.category_button_clicked]}>
                            <Text style={styles.category_text}>7 x ....</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.rows_cat}>
                    <TouchableOpacity style={{...styles.category_button_bottom, borderLeftWidth:0}} onPress={() => _toggleItem(8)}>
                        <View style={[{padding:20}, itemsSelected.includes(8) && styles.category_button_clicked]}>
                            <Text style={styles.category_text}>8 x ....</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category_button_bottom} onPress={() => _toggleItem(9)}>
                        <View style={[{padding:20}, itemsSelected.includes(9) && styles.category_button_clicked]}>
                            <Text style={styles.category_text}>9 x ....</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category_button_bottom} onPress={() => _toggleItem(10)}>
                        <View style={[{padding:20}, itemsSelected.includes(10) && styles.category_button_clicked]}>
                            <Text style={styles.category_text}>10 x ....</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => {
                    if (itemsSelected.length < 1) alert(t('min_cat'))
                    else props.navigation.navigate('GameScreen', {category:itemsSelected})}}>
                    <Text style={styles.button_text}>{t('start_game')}</Text>
                </TouchableOpacity>
            </View>    
        </View>
    );
}

export default Menu


const styles = StyleSheet.create({
    main_container: {
        flex:1,
        
    },
    title_container: {
        flex:1,
        flexDirection: 'row',
        marginVertical:10
    },
    category_container: {
        flex:5,
        justifyContent:'flex-start'
    },
    title_bar: {
        backgroundColor: 'black',
        height: 2,
        flex: 1,
        alignSelf: 'center'
    },
    title_text: {
        alignSelf:'center',
        paddingHorizontal:5,
        fontSize: 24,
        paddingBottom:5
    },
    rows_cat: {
        flexDirection: 'row',
    },
    category_button: {
        flex:1,
        borderTopWidth:1,
        borderLeftWidth:1,
        borderColor: 'grey',
    },
    category_button_bottom: {
        flex:1,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderLeftWidth:1,
        borderColor: 'grey',
    },
    category_button_clicked: {
        opacity:0.7,
        backgroundColor:'pink'
    },
    category_text: {
        textAlign:'center',
        fontSize:15
    },
    button: {
        backgroundColor: '#00BFFF',
        padding:20,
        marginVertical:40,
        marginHorizontal:30,
        borderWidth:1,
        borderColor:'grey',
        borderRadius:4
    },
    button_text: {
        textAlign: 'center',
        color: 'white',
        fontSize:20
    }
});