import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scanner(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({data}) => {
        setScanned(true);
        props.onCodeScanned(data);
    };

    if(hasPermission === null){
        return <Text>Pedindo permissão da camera</Text>
    }
    if(hasPermission === false) {
        return <Text>Sem acesso a camera</Text>
    }
    return (
        <View 
            style={{
                width: '100%',
                height: '90%',
                flexDirection: 'column',
                justifyContent: 'flex-end',
            }}
        
        >
            <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    );
}