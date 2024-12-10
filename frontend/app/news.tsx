import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';


export default function NewsScreen() {
    const { category, title, source, time, imageURL } = useLocalSearchParams();

    return (
        <ScrollView>
            <View className="flex-1 bg-white">
                <View className="relative">
                    <Image 
                        source={{ uri: imageURL }} 
                        className="w-full h-1/2"
                        style={{ width: '100%', height: 300 }}
                    />

                    <View className="absolute top-12 w-full px-4 flex-row justify-between items-center">
                        <TouchableOpacity 
                            className="bg-white rounded-full p-2"
                            onPress={() => router.back()}
                        >
                            <ArrowLeftIcon size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View className="p-4">
                <View className="bg-blue-500 rounded-full px-3 py-1">
                    <Text className="text-white text-sm font-medium">{category}</Text>
                </View>

                <Text className="text-2xl font-bold mb-2">{title}</Text>

                <View className="flex-row items-center mb-4">
                    {/* You might want to add source logo/image here */}
                    <Text className="font-semibold mr-2">{source}</Text>
                    <Text className="text-gray-500">• {time}</Text>
                </View>
            </View>
        </ScrollView>
    )
}