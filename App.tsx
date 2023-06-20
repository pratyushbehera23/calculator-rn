import React, { useState } from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


function App(): JSX.Element {

  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [op, setOp] = useState('_');
  const [val, setVal] = useState(0);

  const clr = () => {
    setN1(0);
    setN2(0);
    setOp('_');
    setVal(0);
  };

  const calc = () => {
    let value = 0;
    switch (op) {
      case ('+'):
        value = n1 + n2;
        break;
      case ('-'):
        value = n1 - n2;
        break;
      case ('*'):
        value = n1 * n2;
        break;
      case ('/'):
        value = n1 / n2;
        break;
    }
    setVal(value);
    // return 0;
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'red'}/>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>


          <View style={styles.displayBox}>
            <Text style={styles.display}>{n1} {op} {n2}</Text>
            <Text style={[styles.display, styles.displayOut]}>{val}</Text>
          </View>


          <View style={styles.grid}>
            {/* 0-9 */}
            <TouchableOpacity style={styles.btn} onPress={n1 === 0 ? () => setN1(9) : () => setN2(9)}>
              <Text style={styles.btnTxt}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={n1 === 0 ? () => setN1(8) : () => setN2(8)}>
              <Text style={styles.btnTxt}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={n1 === 0 ? () => setN1(7) : () => setN2(7)}>
              <Text style={styles.btnTxt}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={n1 === 0 ? () => setN1(6) : () => setN2(6)}>
              <Text style={styles.btnTxt}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={n1 === 0 ? () => setN1(5) : () => setN2(5)}>
              <Text style={styles.btnTxt}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={n1 === 0 ? () => setN1(4) : () => setN2(4)}>
              <Text style={styles.btnTxt}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={n1 === 0 ? () => setN1(3) : () => setN2(3)}>
              <Text style={styles.btnTxt}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={n1 === 0 ? () => setN1(2) : () => setN2(2)}>
              <Text style={styles.btnTxt}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={n1 === 0 ? () => setN1(1) : () => setN2(1)}>
              <Text style={styles.btnTxt}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={n1 === 0 ? () => setN1(0) : () => setN2(0)}>
              <Text style={styles.btnTxt}>0</Text>
            </TouchableOpacity>

            {/* Op */}
            <TouchableOpacity style={[styles.btn, styles.btnOp]} onPress={() => setOp('+')}>
              <Text style={styles.btnTxt}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.btnOp]} onPress={() => setOp('-')}>
              <Text style={styles.btnTxt}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.btnOp]} onPress={() => setOp('*')}>
              <Text style={styles.btnTxt}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.btnOp]} onPress={() => setOp('/')}>
              <Text style={styles.btnTxt}>/</Text>
            </TouchableOpacity>

            {/* btns */}
            <TouchableOpacity style={[styles.btn, styles.btnEq]} onPress={() => calc()}>
              <Text style={styles.btnTxt}>=</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.btnAc]} onPress={() => clr()}>
              <Text style={styles.btnTxt}>AC</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: '100%',
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginVertical: 32,
    padding: 16,
    gap: 36,
    borderColor: '#FF0000',
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  displayBox: {
    flex: 2,
    backgroundColor: '#555555',
    padding: 12,
    alignItems: 'flex-end',
    gap: 12,
  },
  display: {
    fontFamily: 'monospace',
    fontSize: 48,
    fontWeight: '600',
    color: '#111111',
  },
  displayOut: {
    fontSize: 36,
    fontWeight: '600',
    color: '#333333',
  },
  grid:{
    flex: 4,
    gap: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#333333',
    height: 82,
    width: 82,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    fontSize: 40,
  },
  btnOp: {
    backgroundColor: '#E57314',
  },
  btnAc: {
    backgroundColor: '#FF6600',
  },
  btnEq: {
    backgroundColor: '#009C9B',
  },
});

export default App;
