import React, {useState, useRef, useEffect } from "react";
import { View, Text, Pressable, ScrollView, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from "react-native";

import { BreakingNewsCard } from "./BreakingNewsCard";

export function BreakingNewsCards() {

    const [activeIndex, setActiveIndex] = useState(0);
    const scrollViewRef = useRef<ScrollView>(null);
    const screenWidth = Dimensions.get('window').width;
    const [isLoading, setIsLoading] = useState(true);
    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        fetchNewsItems();
    }, [])

    const fetchNewsItems = async () => {
        try {
            const response = await fetch('http://localhost:3000/get-news');
            const data = await response.json();

            // title, description, image_url, country, category, source_name, link pub_date
            setNewsItems(data.results);
            setIsLoading(false);
        }
        catch (error) {
            console.error("Error fetching news items", error);
            setIsLoading(false);
        }
    }

    // const newsItems = [
    //     {
    //         category: "Sports",
    //         source: "CNN Indonesia",
    //         title: "Alexander wears modified helmet in road races",
    //         time: "6 hours ago",
    //         imageURL: "https://cdn.pixabay.com/photo/2024/02/14/16/53/night-8573855_960_720.jpg"
    //     },
    //     {
    //         category: "Sports",
    //         source: "CNN Indonesia",
    //         title: "Alexander wears modified helmet in road races",
    //         time: "6 hours ago",
    //         imageURL: "https://cdn.pixabay.com/photo/2024/02/14/16/53/night-8573855_960_720.jpg"
    //     },
    //     {
    //         category: "Sports",
    //         source: "CNN Indonesia",
    //         title: "Alexander wears modified helmet in road races",
    //         time: "6 hours ago",
    //         imageURL: "https://cdn.pixabay.com/photo/2024/02/14/16/53/night-8573855_960_720.jpg"
    //     },
    //     {
    //         category: "Sports",
    //         source: "CNN Indonesia",
    //         title: "Alexander wears modified helmet in road races",
    //         time: "6 hours ago",
    //         imageURL: "https://cdn.pixabay.com/photo/2024/02/14/16/53/night-8573855_960_720.jpg"
    //     },
    // ]

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const contentOffset = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffset / screenWidth);
        setActiveIndex(index);
    }


    return (
        <View>
            <View className="flex-row justify-between items-center px-4">
                <Text className="text-2xl font-bold">Top Stories</Text>
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
                {newsItems.slice(0, 4).map((item, index) => (
                    <View 
                        key={index} 
                        style={{
                            width: screenWidth * 0.9, // Cards take 90% of screen width
                            marginHorizontal: screenWidth * 0.02 // Small gap between cards
                        }}
                    >
                        {/* {console.log(item.news_content)} */}
                        <BreakingNewsCard 
                            category={item.category}
                            source={item.source_name}
                            title={item.title}
                            time={item.pubDate}
                            imageURL={item.image_url}
                            newsURL={item.link}
                            newsContent={item.news_content}
                        />
                    </View>
                ))}
            </ScrollView>

            <View className="flex-row justify-center mt-4">
                {newsItems.slice(0, 4).map((_, index) => (
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