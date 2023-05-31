/*import React from 'react';
import {View,Button,StyleSheet,Text} from 'react-native';


const ShowTestScreen=(props)=>{
    const image = props.navigation.state.params.image;
    console.log(image);
    return <Text style={{fontSize: 48}}> Show Test Screen </Text>;
}

const styles=StyleSheet.create({});

export default ShowTestScreen;*/
/*
import React from 'react';
import { View, Button, StyleSheet, Text, Image } from 'react-native';

const ShowTestScreen = (props) => {
  const im = props.navigation.state.params.image;
  const image = im.image;
  console.log(image);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Show Test Screen</Text>
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 48,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default ShowTestScreen;*/
/*
import React from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';

const ShowTestScreen = (props) => {
  console.log('Im in the showtestscreen:')
  const documentUri = props.navigation.state.params.doc;
  console.log(documentUri);

  const handleDownload = () => {
    if (documentUri) {
      Linking.openURL(documentUri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Show Test Screen</Text>
      {documentUri && (
        <>
          <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
            <Text style={styles.buttonText}>Download Document</Text>
          </TouchableOpacity>
          <Text style={styles.document}>{documentUri}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 48,
    marginBottom: 20,
  },
  downloadButton: {
    backgroundColor: '#629630',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  document: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default ShowTestScreen;*/
/*
import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const ShowTestScreen = (props) => {
  const doc = props.navigation.state.params.doc;
  const { field1 } = doc;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Show Test Screen</Text>
      <Text>{doc.doc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default ShowTestScreen;
*/
/*
import React from 'react';
import { View, Button, StyleSheet, Text, Linking } from 'react-native';

const ShowTestScreen = (props) => {
  const doc = props.navigation.state.params.doc;
  const { field1 } = doc;

  const handleDownload = async () => {
    try {
      const downloadUrl = doc.doc; // Replace with the actual URL of the file to be downloaded
      await Linking.openURL(downloadUrl);
    } catch (error) {
      console.log('Error occurred while downloading:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Show Test Screen</Text>
      <Text>{doc.doc}</Text>
      <Button title="Download File" onPress={handleDownload} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default ShowTestScreen;
*/
/*
import React from 'react';
import { View, Button, StyleSheet, Text, Linking } from 'react-native';
import * as FileSystem from 'expo-file-system';

const ShowTestScreen = (props) => {
  const doc = props.navigation.state.params.doc;
  const { field1 } = doc;

  const handleDownload = async () => {
    try {
      const downloadUrl = doc.doc; // Replace with the actual URL of the file to be downloaded

      const fileUri = `${FileSystem.cacheDirectory}downloadedFile.pdf`;
      await FileSystem.downloadAsync(downloadUrl, fileUri);

      await FileSystem.getContentUriAsync(fileUri).then(async (contentUri) => {
        await Linking.openURL(contentUri);
      });
    } catch (error) {
      console.log('Error occurred while downloading:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Show Test Screen</Text>
      <Text>{doc.doc}</Text>
      <Button title="Download File" onPress={handleDownload} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default ShowTestScreen;
*/
/*
import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'react-native-fs';

const ShowTestScreen = (props) => {
  const doc = props.navigation.state.params.doc;
  const { field1 } = doc;

  const handleDownload = async () => {
    try {
      const localFilePath = doc.doc; // Replace with the actual local file path

      const tempDir = FileSystem.CachesDirectory + '/Temp';
      const tempFilePath = tempDir + '/downloadedFile.pdf';

      await FileSystem.mkdir(tempDir);
      await FileSystem.copyFile(localFilePath, tempFilePath);

      await DocumentPicker.openFileAsync({ uri: tempFilePath });
    } catch (error) {
      console.log('Error occurred while downloading:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Show Test Screen</Text>
      <Text>{doc.doc}</Text>
      <Button title="Download File" onPress={handleDownload} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default ShowTestScreen;
*/
/*
import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';

const ShowTestScreen = (props) => {
  const doc = props.navigation.state.params.doc;
  const { field1 } = doc;

  const handleDownload = async () => {
    try {
      const localUri = doc.doc; // Replace with the actual local file URI

      const tempDir = FileSystem.cacheDirectory + 'Temp/';
      const tempFileUri = tempDir + 'downloadedFile.pdf';

      await FileSystem.makeDirectoryAsync(tempDir, { intermediates: true });
      await FileSystem.copyAsync({ from: localUri, to: tempFileUri });

      await IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
        data: tempFileUri,
        flags: 1,
      });
    } catch (error) {
      console.log('Error occurred while downloading:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Show Test Screen</Text>
      <Text>{doc.doc}</Text>
      <Button title="Download File" onPress={handleDownload} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default ShowTestScreen;
*/
import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';

const ShowTestScreen = () => {
  const handleDownload = async () => {
    try {
      const document = await DocumentPicker.getDocumentAsync({ type: 'application/pdf' });

      if (document.type === 'success') {
        const localUri = document.uri;

        const tempDir = FileSystem.cacheDirectory + 'Temp/';
        const tempFileUri = tempDir + 'downloadedFile.pdf';

        await FileSystem.makeDirectoryAsync(tempDir, { intermediates: true });
        await FileSystem.copyAsync({ from: localUri, to: tempFileUri });

        await IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
          data: tempFileUri,
          flags: 1,
        });
      }
    } catch (error) {
      console.log('Error occurred while downloading:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Show Test Screen</Text>
      <Button title="Download File" onPress={handleDownload} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default ShowTestScreen;


