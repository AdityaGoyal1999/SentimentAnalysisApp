import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface BreakingNewsCardProps {
    category: string;
    title: string;
    source: string;
    time: string;
    imageURL: string;
}

export function BreakingNewsCard({category, source, title, time, imageURL}: BreakingNewsCardProps) {
    return (
        <TouchableOpacity className="">
            {/* <Image
                source={{ uri: "https://cdn.pixabay.com/photo/2023/06/07/02/16/man-8046025_1280.jpg" }}
                className="w-80 h-48 border-2 border-gray-300 rounded-xl"
            /> */}
            <Text className="">Show something</Text>
        </TouchableOpacity>
    )
}