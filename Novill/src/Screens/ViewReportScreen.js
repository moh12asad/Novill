import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ViewReportScreen = (props) => {
  const r = props.navigation.state.params.item;
  let Fname, Lname, email, phone, utype;

  if (r.user != null) {
    utype = 'user';
    Fname = r.user.Fname;
    Lname = r.user.Lname;
    email = r.user.email;
    phone = r.user.phone;
  } else if (r.pharm != null) {
    utype = 'pharm';
    Fname = r.pharm.Fname;
    Lname = r.pharm.Lname;
    email = r.pharm.email;
    phone = r.pharm.phone;
  } else if (r.del != null) {
    utype = 'del';
    Fname = r.del.Fname;
    Lname = r.del.Lname;
    email = r.del.email;
    phone = r.del.phone;
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{r.title}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.subtitle}>Reporter: {Fname} {Lname}</Text>
        <Text style={styles.subtitle}>Email: {email}</Text>
        <Text style={styles.subtitle}>Phone: {phone}</Text>
        <Text style={styles.text}>Report:</Text>
        <Text style={styles.text}>{r.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  titleContainer: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contentContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#000',
    marginBottom: 5,
  },
  text: {
    fontSize: 20,
    color: '#000',
    marginBottom: 25,
  },
});

export default ViewReportScreen;
