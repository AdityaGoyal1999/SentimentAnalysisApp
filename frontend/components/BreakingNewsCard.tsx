import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";

interface BreakingNewsCardProps {
    category: string;
    title: string;
    source: string;
    time: string;
    imageURL: string;
    isActive?: boolean;
}

export function BreakingNewsCard({category, source, title, time, imageURL, isActive=false}: BreakingNewsCardProps) {
    return (
        <TouchableOpacity className={`overflow-hidden rounded-xl ${isActive ? 'scale-100' : 'scale-90'}`}>
            <ImageBackground 
                source={{ uri: imageURL }}
                className="w-full h-full"
            >
                {/* Dark overlay for better text visibility */}
                <View className="absolute inset-0 bg-black/30" />
                
                {/* Content container */}
                <View className="p-4 flex-1 justify-between">
                    {/* Top section with category */}
                    <View className="flex-row">
                        <View className="bg-blue-500 rounded-full px-3 py-1">
                            <Text className="text-white text-sm font-medium">{category}</Text>
                        </View>
                    </View>

                    {/* Bottom section with title and source/time */}
                    <View className="mt-auto">
                        <Text className="text-white text-lg font-bold mb-1">{title}</Text>
                        <View className="flex-row items-center">
                            <Text className="text-white text-sm mr-2">{source}</Text>
                            <Text className="text-white/80 text-sm">{time}</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}
