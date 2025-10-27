import React, { useState } from "react";
import {
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Modal,
    Pressable,
    ScrollView,
} from "react-native";

const datas = [
    {
        id: 1,
        title:
            "Telkom Indonesia Gelar Acara Site Visit Implementasi Digital Culture di Telkom University Surabaya",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/telkom-indonesia-1200x600.jpg?lossy=2&strip=1&webp=1",
        description:
            "Kegiatan ini bertujuan untuk memperkenalkan budaya digital di lingkungan kampus dan industri, dengan fokus pada penerapan teknologi baru di era transformasi digital.",
    },
    {
        id: 2,
        title: "Tel-U Surabaya Gelar Sosialisasi Bandung Techno Park",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/kekayaan-intelektual-1200x600.jpg?lossy=2&strip=1&webp=1",
        description:
            "Acara sosialisasi ini mengenalkan potensi kolaborasi antara mahasiswa dan startup di Bandung Techno Park untuk mengembangkan inovasi digital baru.",
    },
    {
        id: 3,
        title:
            "Soft Launching Laboratorium Motion di Telkom University Surabaya",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/motion-capture-1200x600.jpg?lossy=2&strip=1&webp=1",
        description:
            "Laboratorium Motion ini mendukung penelitian di bidang animasi, virtual reality, dan motion capture untuk pengembangan konten kreatif mahasiswa.",
    },
    {
        id: 4,
        title: "Tingkatkan Kualitas Pengelolaan Jurnal Ilmiah: Telkom University Surabaya Gelar Workshop Migrasi Web Jurnal",
        image: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/05/workshop-migrasi-web-1200x600.jpg?lossy=2&strip=1&webp=1",
        description: "Workshop ini bertujuan untuk meningkatkan kualitas dan profesionalitas pengelolaan jurnal ilmiah di lingkungan kampus melalui pelatihan migrasi sistem web jurnal ke platform yang lebih modern dan efisien.",
    },
    {
        id: 5,
        title: "Menggali Potensi Desa: Telkom University Surabaya Mendukung UMKM di Tambak Kalisogo",
        image: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/03/Telkom-University-Surabaya-2-1200x600.jpg?lossy=2&strip=1&webp=1",
        description: "Kegiatan ini merupakan bagian dari program pengabdian masyarakat Telkom University Surabaya yang mendukung pengembangan UMKM lokal di Desa Tambak Kalisogo melalui pelatihan digital marketing dan pemanfaatan teknologi.",
    },
    {
        id: 6,
        title: "Telkom University Surabaya Hadirkan Inovasi Pengganti Bantalan Roda Semi Otonom Tank Leopard berbasis Electric Forklift Khusus untuk Penguatan Alutsista TNI",
        image: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/02/tank-leopard.jpg?lossy=2&strip=1&webp=1",
        description: "Inovasi ini menghadirkan solusi teknologi berbasis electric forklift sebagai pengganti bantalan roda semi otonom Tank Leopard, mendukung kemandirian industri pertahanan nasional dan penguatan alutsista TNI.",
    },
    {
        id: 7,
        title: "Sosialisasi PKM 2024 Bersama Tim Pemenangan Tel-U Surabaya",
        image: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/02/pkm-2024-1-1200x600.jpeg?lossy=2&strip=1&webp=1",
        description: "Sosialisasi ini mengajak mahasiswa untuk memahami lebih dalam tentang Program Kreativitas Mahasiswa (PKM) 2024, serta strategi penyusunan proposal yang berpotensi lolos pendanaan dari Kemendikbudristek.",
    },
    {
        id: 8,
        title: "Transformasi Digital Al-Barra Studio Melalui Pembuatan Website oleh Institut Teknologi Telkom Surabaya",
        image: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/11/transformasi-digital.jpg?lossy=2&strip=1&webp=1",
        description: "Melalui kegiatan ini, mahasiswa ITTelkom Surabaya membantu Al-Barra Studio bertransformasi digital dengan membangun website profesional untuk memperluas jangkauan bisnis dan meningkatkan daya saing di era digital.",
    },
    {
        id: 9,
        title: "Program Pengabdian Masyarakat Telkom University Surabaya Bantu UMKM Desa Panjunan Go Digital dan Raih Pasar Internasional",
        image: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/09/umkm-go-digital-1200x600.jpg?lossy=2&strip=1&webp=1",
        description: "Program ini membantu UMKM di Desa Panjunan untuk melakukan transformasi digital melalui pelatihan e-commerce dan pemasaran global, sehingga produk lokal dapat menjangkau pasar internasional.",
    },
    {
        id: 10,
        title: "Workshop Social Media Marketing dari INDIBIZ Memberdayakan Pedagang Lokal",
        image: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/07/social-media-marketing-1-1200x600.jpg?lossy=2&strip=1&webp=1",
        description: "Workshop ini menghadirkan tim dari INDIBIZ untuk memberikan pelatihan kepada para pedagang lokal mengenai strategi pemasaran digital melalui media sosial agar dapat memperluas pasar dan meningkatkan penjualan.",
    },
];

const List = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.view}
            onPress={() => {
                setSelectedItem(item);
                setModalVisible(true);
            }}
        >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <FlatList
                data={datas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 0 }}
            />

            {/* Modal */}
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        {selectedItem && (
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <Image
                                    source={{ uri: selectedItem.image }}
                                    style={styles.modalImage}
                                />
                                <Text style={styles.modalTitle}>{selectedItem.title}</Text>
                                <Text style={styles.modalDesc}>{selectedItem.description}</Text>
                            </ScrollView>
                        )}
                        <Pressable
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeText}>Tutup</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        padding: 15,
        borderBottomColor: "#dddddd",
        borderBottomWidth: 1,
    },
    image: {
        height: 200,
        width: "100%",
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
        paddingTop: 10,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: "80%",
        height: "58%",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
    },
    modalImage: {
        height: 180,
        width: "100%",
        borderRadius: 10,
        marginBottom: 15,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    modalDesc: {
        fontSize: 15,
        textAlign: "justify",
        color: "#444",
    },
    closeButton: {
        backgroundColor: "#AA0002",
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
    },
    closeText: {
        color: "white",
        fontWeight: "bold",
    },
});

export default List;