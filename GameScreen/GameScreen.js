import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, TouchableOpacity, Animated, Text, Vibration} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 


export default function GameScreen(props) {
    const [results, setResults] = useState('');
    const [score, setScore] = useState(0);
    const [calcul, setCalcul] = useState([0, 0]);
    const [life, setLife] = useState(3);
    const [isGoodAnswer, setIsGoodAnswer] = useState(true);
    const shakeAnimation = useRef(new Animated.Value(0.0)).current

    useEffect(() => {
        newCalcul();
    }, [])

    const newCalcul = () => {
        let calcul1 = props.route.params.category[Math.floor(Math.random() * props.route.params.category.length)];
        let calcul2 = Math.floor(Math.random() * 10) + 1;
        setCalcul([calcul1, calcul2]);
    }

    const displayLife = () => {
        let items = [];
        for (let el of Array(life).keys()) {
            items.push(<View style={{marginVertical:10}} key={el}><AntDesign  style={{margin:10}} name="heart" size={24} color="black" /></View>);
        }
        return items;
    }

    const _checkResult = () => {
        if (parseInt(results) == calcul[0] * calcul[1]) {
            setScore(score + 1);
            setResults('');
            setIsGoodAnswer(true);
        }
        else {
            shake()
            setIsGoodAnswer(false);
            setLife(life-1);
            setResults('');
        }
    }

    const _deleteLastElement = () => {
        Vibration.vibrate(0.05*1000);
        setResults(results.slice(0, results.length - 1));
    }

    const _deleteAllElements = () =>  {
        Vibration.vibrate(0.05*1000);
        setResults('');
    }

    const _confirmAnswer = () => {
        _checkResult();
        Vibration.vibrate(0.03*1000);
    }

    const _finishScreen = () => {
        props.navigation.replace('FinishScreen', {score: score});
    }

    const shake = () => {
        Animated.sequence([
          Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
          Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
          Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
          Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
          Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
          Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true })
        ]).start();
     }

    //Check result when the answer length is equal to the input length
    if (results.length >= (calcul[0] * calcul[1]).toString().length) {
        _checkResult();
    }

    if (life == 0) {
        _finishScreen();
    }

    if (parseInt(results) == calcul[0] * calcul[1]) {
        setResults('');
        newCalcul();
        setScore(score + 1);
    }

    return(
        <View style={styles.main_container}>
            <View style={{flex:1, justifyContent:'flex-start'}}>
                <Text style={styles.calcul_text}>{calcul[0]} x {calcul[1]}</Text>
                <Animated.View style={[styles.input_calcul, {transform:[{translateX: shakeAnimation}]}, !isGoodAnswer && {borderColor:'red', borderWidth:2}]}>
                    <Text style={styles.input_text}>{results}</Text>
                    <TouchableOpacity style={styles.delete_button} onPress={() => _deleteLastElement()}><Feather name="delete" size={24} color="black" /></TouchableOpacity>
                </Animated.View>
                <Text style={styles.score}>Score : {score}</Text>
                <View style={styles.life}>{displayLife()}</View>
            </View>
            <View style={{flex:2, marginTop:20}}>
                <View style={styles.row_buttons}>
                    <TouchableOpacity style={styles.button_style_left} onPress={() => setResults(results + '1')}>
                        <Text style={styles.button_text}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_style} onPress={() => setResults(results + '2')}>
                        <Text style={styles.button_text}>2</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.button_style} onPress={() => setResults(results + '3')}>
                        <Text style={styles.button_text}>3</Text>
                    </TouchableOpacity> 
                </View>
                <View style={styles.row_buttons}>
                    <TouchableOpacity style={styles.button_style_left} onPress={() => setResults(results + '4')}>
                        <Text style={styles.button_text}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_style} onPress={() => setResults(results + '5')}>
                        <Text style={styles.button_text}>5</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.button_style} onPress={() => setResults(results + '6')}>
                        <Text style={styles.button_text}>6</Text>
                    </TouchableOpacity> 
                </View>
                <View style={styles.row_buttons}>
                    <TouchableOpacity style={styles.button_style_left} onPress={() => setResults(results + '7')}>
                        <Text style={styles.button_text}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_style} onPress={() => setResults(results + '8')}>
                        <Text style={styles.button_text}>8</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.button_style} onPress={() => setResults(results + '9')}>
                        <Text style={styles.button_text}>9</Text>
                    </TouchableOpacity> 
                </View>
                <View style={styles.row_buttons}>
                    <TouchableOpacity style={styles.button_style_left} onPress={() => _deleteAllElements()}>
                        <View style={{alignSelf:'center'}}><AntDesign name="delete" size={25} color="black" /></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_style} onPress={() => setResults(results + '0')}>
                        <Text style={styles.button_text}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_style} onPress={() => _confirmAnswer()}>
                        <View style={{alignSelf:'center'}}><AntDesign name="arrowright" size={25} color="black" /></View>
                    </TouchableOpacity>
                </View>
            </View>     
        </View>
    );
}

const styles = StyleSheet.create({
    main_container: {
        flex:1,
    },
    calcul_text: {
        alignSelf:'center',
        fontSize:35,
        marginVertical:10
    },
    input_calcul: {
        justifyContent:'flex-end',
        flexDirection:'row',
        padding: 10,
        marginHorizontal: 30,
        borderColor:'grey',
        borderWidth:1,
        borderRadius:2,
    },
    input_text: {
        fontSize:25,
        alignSelf:'center'
    },
    delete_button: {
        marginLeft:10,
        marginTop:6
    },
    score: {
        alignSelf:'center',
        fontSize:20,
        marginTop:20
    },
    life : {
        flexDirection:'row',
        alignSelf:'center'
    },
    row_buttons: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
    button_style: {
        flex:1,
        borderTopWidth:2,
        borderLeftWidth:2,
        borderRadius:1,
        borderColor: 'grey',
        justifyContent: 'center'
    },
    button_style_left: {
        flex:1,
        borderTopWidth:2,
        borderRadius:1,
        borderColor: 'grey',
        justifyContent: 'center'
    },
    button_text: {
        textAlign: 'center',
        fontSize:25,

    },
});