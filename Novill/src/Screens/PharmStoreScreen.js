import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,TouchableOpacity,ImageBackground,Image, TextInput} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import PharmListComp from './Components/PharmListComp';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
const PharmStoreScreen=(props)=>{
    //const {signout,getPharms} = useContext(AuthContext);
    const {state,productlistforuser,clearErrorMessage}=useContext(AuthContext);
    const [loaded,updateloaded] =useState(false)
    const [productsCollection,setproductsCollection]=useState();
    const [Pharm,setPharm]=useState();
    const[cart2,setCart2]=useState();
    const pharm=props.navigation.state.params.pharm;
    const user = props.navigation.state.params.user;
    //let pharmsCollection=[];
    const myuserpharms=useContext(GlobalContex);
    console.log('IM IN PHARMSTORESCREEN'); 
    //const[cart,SetCart]=useState();
    let cart;
    const createCart = async () => {
      try {
        const response = await Server.post('/CreateCart', {
          user
        });
        console.log(response.data.cart);
        cart = response.data.cart;
        console.log('The Cart in pharm store screen is:-----\n', cart, '------\n');
        console.log(pharm.pname);
      } catch (err) {
        console.log('error in createCart');
        console.log(err);
      }
    };
    useEffect(() => {(async () => {
            try {
                //const response = await Server.get('/getPharms') 
                updateloaded(true);
                //const pharmsArray = response.data.pharms1;
                //console.log("ASDGHGSDF--------------------:",pharmsArray);
                setPharm(pharm);
                setproductsCollection(pharm.products);
                /*const response = await Server.post('/CreateCart',{
                  user
                });
                console.log(response.data.cart);
                //cart= response.data.cart;
                //SetCart(response.data.cart);
                cart = response.data.cart;*/
                console.log('The Cart in pharm store screen is:-----\n',cart,'------\n');
                //console.log('PharmStore:');
                console.log(pharm.pname)

            } catch (err) {
                console.log('error in useEffect');
                console.log(err)
            }
    
        })()
    },[loaded] )

 createCart();
    return(
<ImageBackground source={require("../Screens/images/image.jpg")} style={{ width: '100%', height: '100%' }}>
  <SafeAreaView style={{ height: '80%' }}>
  <View  style={{backgroundColor:'#ccdf93',height:210,width:410,
                  
                     borderBottomRightRadius:150,
                 
                     
                    
                     }}>
    <Text style={{color:'#000', fontSize: 45, fontWeight: 'bold', marginVertical: 5, top: 5 ,textAlign: "center"}}>{pharm.pname}</Text>
    <Spacer />
    <View style={{marginBottom:10,top:-10}}>
    <Text  style={{ fontSize: 18, marginVertical: 5, left: 10, top: 5 }}>{pharm.desc}</Text>
    <View style={{ flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,}}>
    <Entypo name="phone" size={24} color="black" />
    <Text  style={{ fontSize: 15, marginVertical: 5, left: 10}}>{pharm.phone}</Text>
    </View>
  
    <View style={{ flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    top:-15}}>
    <Entypo name="location-pin" size={24} color="black" />
    <Text style={{ fontSize: 15,  left: 10}}>{pharm.location}</Text>
  </View>
  </View>
    </View>
     <Text style={{ paddingTop:10,
      paddingHorizontal:20,
      fontSize:18,
      fontWeight:'700',
      color:'#000' }}>Products</Text>
  <View style={{ flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,}}>
    <Icon name="search" style={{fontSize:20,color:'#000',opacity:0.8,marginRight: 10,
}} /> 
      <TextInput placeholder='Search...'
        
        style={{fontSize: 18,
    fontWeight: 'bold',
    textShadowOffset: { width: 2, height: 2 },
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 2,}}
      />
  </View>

     

  <View style={styles.view}>
    <FlatList
      data={productsCollection}
      numColumns={2}
      renderItem={({ item }) => {
        return <PharmListComp name={item.prodname} location={item.price+"$"} onPress={()=>props.navigation.navigate('Product',{pharm1:pharm,prod:item,cart:cart,user:user})} />;
                

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
 container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 2,
  

    },  
    width: 170,
      height: 160,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flex:1,
    justifyContent:'space-around',
     marginHorizontal:10
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  location: {
    fontSize: 18,
    color: '#666',
  },
});

export default PharmStoreScreen;
//122 props.navigation.navigate('Product',{pharm1:pharm,prod:item,cart:cart,user:user})