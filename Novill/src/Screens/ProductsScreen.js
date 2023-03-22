import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,ImageBackground} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ProductsScreen=(props)=>{
    //console.log(props.navigation.state.params.pname);
    const pname = props.navigation.state.params.pname;
    const [loaded,updateloaded] =useState(false)
    const [productsCollection,setproductsCollection]=useState();
    const [pharm,setPharm]=useState();

    useEffect(() => {(async () => {
            try {
                const response = await Server.get('/Products', {
                    params: { pname }
                });
                updateloaded(false);
                console.log(response.data.fpharm);
                console.log(response.data.prods);
                //productsCollection=response.data.prods;
                setproductsCollection(response.data.prods);
                //pharm=response.data.fpharm;
                setPharm(response.data.fpharm);
                /*response.data.prods.forEach(product => {
                    console.log(product);
                });*/
                //const productsArray = response.data.fpharm;
                //setproductsCollection(productsArray);
            } catch (err) {
                console.log('error in useEffect');
                console.log(err)
            }
    
        })()
    },[loaded] )


    return(
                  <ImageBackground source={require("../Screens/images/im.jpg")} style={{ width:'100%', height:'100%' }} >

        {/*
         <SafeAreaView forceInset={{top:'always'}}>
            <Text style={{fontSize: 48}}> Pharms List </Text>
            <Spacer/>
            <Button title="Sign out" onPress={signout}/>
            <Spacer/>
            <Text>Here is</Text>
            <Spacer/>
        </SafeAreaView>*/}

        <SafeAreaView>
            <Text style={{fontSize: 38,
              fontWeight:'bold'
              ,marginVertical:5,
              left:70,
            top:20}}> Products</Text>
            <Spacer/>
            <FlatList style={{ marginVertical:30,
        marginBottom:-10,
        marginTop:50,
        marginStart:10,
        top:-50}} data={productsCollection} 
                renderItem={({item})=>{
                return( 
                        <Text style={{fontSize:20}}>{item.prodname}</Text>
                    ); 
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