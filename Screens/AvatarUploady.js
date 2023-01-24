// import React, { useState, useCallback, useContext } from "react";
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Button,
//   ImageBackground,
//   Image,
// } from "react-native";

// import DocumentPicker from "react-native-document-picker/index";

// import NativeUploady, {
//   UploadyContext,
//   useItemFinishListener,
//   useItemStartListener,
//   useItemErrorListener,
// } from "@rpldy/native-uploady";

// const Upload = () => {
//   const [uploadUrl, setUploadUrl] = useState(false);
//   const uploadyContext = useContext(UploadyContext);

//   useItemFinishListener((item) => {
//     const response = JSON.parse(item.uploadResponse.data);
//     console.log(`item ${item.id} finished uploading, response was: `, response);
//     setUploadUrl(response.url);
//   });

//   useItemErrorListener((item) => {
//     console.log(`item ${item.id} upload error !!!! `, item);
//   });

//   useItemStartListener((item) => {
//     console.log(`item ${item.id} starting to upload,name = ${item.file.name}`);
//   });

//   const pickFile = useCallback(async () => {
//     try {
//       const res = await DocumentPicker.pick({
//         type: [DocumentPicker.types.images],
//       });

//       uploadyContext.upload(res);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         console.log(
//           "User cancelled the picker, exit any dialogs or menus and move on"
//         );
//       } else {
//         throw err;
//       }
//     }
//   }, [uploadyContext]);

//   return (
//     <View>
//       <Button title="Choose File" onPress={pickFile} />
//       {uploadUrl && (
//         <Image source={{ uri: uploadUrl }} style={styles.uploadedImage} />
//       )}
//     </View>
//   );
// };

// export function AvatarUploady() {
//   return (
//     <>
//       <NativeUploady destination={{ url: "https://192.168.0.107:19000" }}>
//         <SafeAreaView>
//           <ScrollView contentInsetAdjustmentBehavior="automatic">
//             <ImageBackground
//               accessibilityRole={"image"}
//               source={require("../assets/images/add.png")}
//               style={styles.headerBackground}
//               //   imageStyle={styles.headerLogo}
//             >
//               <Text style={styles.headerText}>Welcome to React-Uploady</Text>
//             </ImageBackground>

//             <View style={styles.body}>
//               <View style={styles.sectionContainer}>
//                 <Text style={styles.sectionTitle}>Upload File</Text>
//               </View>
//             </View>
//           </ScrollView>
//         </SafeAreaView>

//         <Upload />
//       </NativeUploady>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   headerBackground: {
//     backgroundColor: "#F6F6F6",
//   },
//   headerText: {
//     fontSize: 15,
//   },
//   image: {
//     resizeMode: "cover",
//     position: "absolute",
//     top: 81,
//     left: 107,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   body: {
//     width: 200,
//     height: 200,
//   },
//   sectionContainer: {
//     width: 100,
//     height: 100,
//   },
//   sectionTitle: {
//     fontSize: 10,
//   },
// });
// import Uploady from "@rpldy/uploady";
// import UploadButton from "@rpldy/upload-button";

// export const AvatarUploady = () => (
//   <Uploady destination={{ url: "https://192.168.0.107:19000/upload" }}>
//     <UploadButton />
//   </Uploady>
// );
