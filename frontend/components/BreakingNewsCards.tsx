import React, {useState, useRef} from "react";
import { View, Text, Pressable, ScrollView, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from "react-native";

import { BreakingNewsCard } from "./BreakingNewsCard";

export function BreakingNewsCards() {

    const [activeIndex, setActiveIndex] = useState(0);
    const scrollViewRef = useRef<ScrollView>(null);
    const screenWidth = Dimensions.get('window').width;

    const newsItems = [
        {
            category: "Sports",
            source: "CNN Indonesia",
            title: "Alexander wears modified helmet in road races",
            time: "6 hours ago",
            imageURL: "https://cdn.pixabay.com/photo/2024/02/14/16/53/night-8573855_960_720.jpg"
        },
        {
            category: "Sports",
            source: "CNN Indonesia",
            title: "Alexander wears modified helmet in road races",
            time: "6 hours ago",
            imageURL: "https://cdn.pixabay.com/photo/2024/02/14/16/53/night-8573855_960_720.jpg"
        },
        {
            category: "Sports",
            source: "CNN Indonesia",
            title: "Alexander wears modified helmet in road races",
            time: "6 hours ago",
            imageURL: "https://cdn.pixabay.com/photo/2024/02/14/16/53/night-8573855_960_720.jpg"
        },
        {
            category: "Sports",
            source: "CNN Indonesia",
            title: "Alexander wears modified helmet in road races",
            time: "6 hours ago",
            imageURL: "https://cdn.pixabay.com/photo/2024/02/14/16/53/night-8573855_960_720.jpg"
        },
    ]

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const contentOffset = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffset / screenWidth);
        setActiveIndex(index);
    }


    return (
        <View>
            <View className="flex-row justify-between items-center px-4">
                <Text className="text-2xl font-bold">Breaking News</Text>
                <Pressable className="text-blue-500">
                    <Text className="text-blue-600">View All</Text>
                </Pressable>
            </View>
            {/* <BreakingNewsCard category="Sports" source="CNN" title="Cycling" time="10:00" imageURL="https://cdn.pixabay.com/photo/2023/06/07/02/16/man-8046025_1280.jpg"  /> */}

            <ScrollView 
                ref={scrollViewRef}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                className="flex-row h-56 border-2 border-red-500"
                contentContainerStyle={{
                    paddingHorizontal: screenWidth * 0.01 // Add padding for peek effect
                }}
            >
                {newsItems.map((item, index) => (
                    <View 
                        key={index} 
                        style={{
                            width: screenWidth * 0.9, // Cards take 90% of screen width
                            marginHorizontal: screenWidth * 0.02 // Small gap between cards
                        }}
                    >
                        <BreakingNewsCard 
                            category={item.category}
                            source={item.source}
                            title={item.title}
                            time={item.time}
                            imageURL={item.imageURL}
                        />
                    </View>
                ))}
            </ScrollView>

            <View className="flex-row justify-center mt-4">
                {newsItems.map((_, index) => (
                    <View
                        key={index}
                        className={`h-2 w-2 rounded-full mx-1 ${
                            index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                    />
                ))}
            </View>
        </View>
    )
}