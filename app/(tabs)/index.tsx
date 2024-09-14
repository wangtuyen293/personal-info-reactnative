import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const StudentProfile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('@/assets/images/tuyen.png')}
        style={styles.image}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Mã SV:</Text>
        <Text style={styles.text}>DE170746</Text>

        <Text style={styles.label}>Lớp:</Text>
        <Text style={styles.text}>SE17C03</Text>

        <Text style={styles.label}>Họ tên:</Text>
        <Text style={styles.text}>Nguyễn Quang Tuyến</Text>

        <Text style={styles.label}>Quê quán:</Text>
        <Text style={styles.text}>Quảng Trị</Text>

        <Text style={styles.label}>Địa chỉ:</Text>
        <Text style={styles.text}>Đại học FPT</Text>
        <Text style={styles.label}>Sở thích:</Text>
        <Text style={styles.text}>Chơi thể thao(điện tử), đọc sách </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginTop: 5,
    color: '#333',
  },
});

export default StudentProfile;
