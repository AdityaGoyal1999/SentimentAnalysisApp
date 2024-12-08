import React from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";

interface RecommendationCardProps {
    category: string;
    title: string;
    imageURL: string;
    authorImageURL: string;
    author: string;
    date: string;
    // description: string;
}

function RecommendationCard({ title, imageURL, category, authorImageURL, author, date }: RecommendationCardProps) {
    return (
        <View className="flex-row border-2 border-red-200 my-2">
            <Image 
                source={{ uri: imageURL}}
                className="w-24 h-auto rounded-lg"
            />
            <View className="flex-1 ml-3 justify-center">
                <Text className="text-gray-500 text-sm font-bold mb-1">{category}</Text>
                <Text className="text-lg" numberOfLines={2}>{title}</Text>
            {/* <Text className="text-sm">{description}</Text> */}
                <View className="flex-row items-center gap-2">
                    <Image 
                        source={{ uri: authorImageURL}}
                        className="w-5 h-5 rounded-full"
                    />
                    <Text className="text-gray-500 text-sm">{author}</Text>
                    <Text className="text-gray-500 text-sm">{date}</Text>
                </View>
            </View>
        </View>
    )
}

export function RecommendationSection() {
    const recommendations = [
        {
            category: 'Sports',
            title: 'What Training Do Volleyball Players Need?',
            author: 'McKindney',
            authorImageURL: 'https://cdn.pixabay.com/photo/2024/02/14/16/53/night-8573855_960_720.jpg',
            date: 'Feb 27, 2023',
            imageURL: 'https://cdn.pixabay.com/photo/2024/02/14/16/53/night-8573855_960_720.jpg'
        },
        {
            category: 'Education',
            title: 'Secondary school places: When do parents find out?',
            author: 'Rosemary',
            authorImageURL: 'https://cdn.pixabay.com/photo/2024/02/14/16/53/night-8573855_960_720.jpg',
            date: 'Feb 28, 2023',
            imageURL: 'https://cdn.pixabay.com/photo/2024/02/14/16/53/night-8573855_960_720.jpg'
        },
        {
            category: 'Education',
            title: 'Secondary school places: When do parents find out? This is a test title and it is meant to be long',
            author: 'Rosemary',
            authorImageURL: 'https://cdn.pixabay.com/photo/2024/02/14/16/53/night-8573855_960_720.jpg',
            date: 'Feb 28, 2023',
            imageURL: 'https://cdn.pixabay.com/photo/2024/02/14/16/53/night-8573855_960_720.jpg'
        },
        // Add more recommendations as needed
    ];

    return (
        <View className="px-4">
            <View className="flex-row justify-between items-center">
                <Text className="text-2xl font-bold">Recommendations</Text>
                <Pressable>
                    <Text className="text-blue-500">View All</Text>
                </Pressable>
            </View>

            <ScrollView>
                {recommendations.map((item, index) => (
                    <RecommendationCard 
                        key={index}
                        category={item.category}
                        title={item.title}
                        imageURL={item.imageURL}
                        authorImageURL={item.authorImageURL}
                        author={item.author}
                        date={item.date}
                        // description={item.description}
                    />
                ))}
            </ScrollView>
        </View>
    )
}