import React from 'react';
import{View, Text, Image, ScrollView, TextInput} from 'react-native';

const ONDA = () => {
  return(
    <ScrollView>
        <View>
          <Text
            style={{
              fontSize:45,
              alignSelf: "center",
              color: "green",
            }}
          >
            A GRANDE ONDA DE KANAGAWA
            </Text>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Great_Wave_off_Kanagawa2.jpg',
              }}
              style={{ width:200, height:210, alignSelf: 'center'}}
              />
          </View>
          <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                padding: 5,
                margin: 15,
              }}
              defaultValue="DIGITE AQUI !!!"
              />
        </ScrollView>
        );
}

export default ONDA; 