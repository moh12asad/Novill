import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,TouchableOpacity,ImageBackground,Image} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import PharmListComp from './Components/PharmListComp';

const PharmStoreScreen=(props)=>{
    //const {signout,getPharms} = useContext(AuthContext);
    const {state,productlistforuser,clearErrorMessage}=useContext(AuthContext);
    const [loaded,updateloaded] =useState(false)
    const [productsCollection,setproductsCollection]=useState();
    const [Pharm,setPharm]=useState();
    const pharm=props.navigation.state.params.pharm;
    const user = props.navigation.state.params.user;
    //let pharmsCollection=[];
    const myuserpharms=useContext(GlobalContex); 
    //const[cart,SetCart]=useState();
    let cart;
    useEffect(() => {(async () => {
            try {
                //const response = await Server.get('/getPharms') 
                updateloaded(true);
                //const pharmsArray = response.data.pharms1;
                //console.log("ASDGHGSDF--------------------:",pharmsArray);
                setPharm(pharm);
                setproductsCollection(pharm.products);
                const response = await Server.post('/CreateCart',{
                  user
                });
                console.log(response.data.cart);
                //cart= response.data.cart;
                //SetCart(response.data.cart);
                cart = response.data.cart;
                console.log('The Cart in pharm store screen is:-----\n',cart,'------\n');
                //console.log('PharmStore:');
                console.log(pharm.pname)

            } catch (err) {
                console.log('error in useEffect');
                console.log(err)
            }
    
        })()
    },[loaded] )


    return(
<ImageBackground source={require("../Screens/images/image.jpg")} style={{ width: '100%', height: '100%' }}>
  <SafeAreaView style={{ height: '80%' }}>
    <Text style={{color:'#629631', fontSize: 40, fontWeight: 'bold', marginVertical: 5, top: 5,backgroundColor:'#D2F1C8' }}>{pharm.pname}</Text>
    <Spacer />
    <View style={{backgroundColor:'#Ffff',marginBottom:10,top:-10}}>
    <Text  style={{ fontSize: 18, marginVertical: 5, left: 10, top: 5 }}>{pharm.desc}</Text>
    <Text  style={{ fontSize: 15, marginVertical: 5, left: 10, top: 5 }}>Pharm Phone:</Text>

    <Text style={{ fontSize: 15, marginVertical: 5, left: 10, top: 5 }}>Pharm location: {pharm.location}</Text>
  </View>
  <Text style={{fontSize:25,justifyContent:'center'}}>Store's Products</Text>
  <View style={styles.view}>
    <FlatList
      data={productsCollection}
      style={{ height: '50%' }}
      renderItem={({ item }) => {
        return <PharmListComp style={styles.item} name={item.prodname} location={item.price} onPress={()=>props.navigation.navigate('Product',{pharm1:pharm,prod:item,cart:cart,user:user})} />;
                

      }}                                                                                     //onPress={()=>props.navigation.navigate('PharmStore',{pharm:item})}
    /></View>
  </SafeAreaView>
  <View style={styles.cartContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Cart',{user:user,cart:cart,pharm:pharm})}>
          <Image source={require('../Screens/images/cart.jpeg')} style={styles.cartImage} />
        </TouchableOpacity>
      </View>
</ImageBackground>

        );
}

const styles=StyleSheet.create({


    container: {
  flex: 1,
  backgroundColor: '#fff',
  paddingTop: 10,
  paddingHorizontal: 10,

},
item: {
  marginTop: 10,
  padding: 10,
  backgroundColor: '#fff',
  fontSize: 25,


},
view:{

  width:'100%',
  height:'100%',
  borderRadius:100,
  backgroundColor:'#fff'
},
cartContainer: {
  position: 'absolute',
  bottom: 20,
  right: 20,
},
cartImage: {
  width: 50,
  height: 50,
  borderRadius: 25,
},
});

export default PharmStoreScreen;
