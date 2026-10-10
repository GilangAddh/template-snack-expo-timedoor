import { Image, Text, View } from 'react-native';

const TemplateScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Image
                source={require('@/assets/images/splash-icon.png')}
                style={{ width: 100, height: 100 }}
            />
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Template Project</Text>
            <Text>Enjoy your app!</Text>
        </View>
    );
};

export default TemplateScreen;
