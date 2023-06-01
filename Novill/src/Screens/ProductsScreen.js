import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,ImageBackground} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PharmListComp from './Components/PharmListComp';
import ProductListComp from './Components/ProductListComp';


const ProductsScreen=(props)=>{
    //console.log(props.navigation.state.params.pname);
    const pname = props.navigation.state.params.pname;
    const [loaded,updateloaded] =useState(false)
    const [productsCollection,setproductsCollection]=useState();
    const [pharm,setPharm]=useState();
    const pharm1=props.navigation.state.params;
    //console.log("The pharm 1 is:",pharm1);
    console.log('Look here!!::: ',pharm1)
    const user = props.navigation.state.params.user;
    useEffect(() => {(async () => {
            try {
                const response = await Server.get('/Products', {
                    params: { pname }
                });
                updateloaded(false);
                console.log(response.data.fpharm);
                console.log(response.data.prods);
                setproductsCollection(response.data.prods);
                setPharm(response.data.fpharm);
            } catch (err) {
                console.log('error in useEffect');
                console.log(err)
            }
    
        })()
    },[loaded] )


    return(
                  <ImageBackground source={require("../Screens/images/BackGround1.jpg")} style={{ width:'100%', height:'100%' }} >

        

        <SafeAreaView>
            <Text style={{fontSize: 38,
              fontWeight:'bold'
              ,marginVertical:5,
            top:20}}> Products</Text>
            <Spacer/>
            <FlatList style={{ marginVertical:30,
        marginBottom:-10,
        marginTop:50,
        marginStart:10,
        top:-50}} 
                      data={productsCollection}
                    
                 renderItem={({ item }) => {
        return  <ProductListComp name={item.prodname} price={item.price+"$"}  onPress={()=>props.navigation.navigate('PharmProduct',{item,pharm1})}/>;
        

      }}/>
                
            
        </SafeAreaView>
</ImageBackground>
        );

}

const styles=StyleSheet.create({});

export default ProductsScreen;

/*
              <FlatList  style={{ flex: 1, padding: 10 }} data={myuserpharms}
                        renderItem={({item})=>{
                            <View>
                                <Text>
                                    {item.email}
                                </Text>
                            </View>
                        }}    
                />


<FlatList data={usersCollection} 
                return renderItem={({item})=>{
                    <TouchableOpacity onPress={()=>console.log('PRESSEEDD!!')}> <Text>{item.email}</Text>
                    </TouchableOpacity>
                    }}/>
                */