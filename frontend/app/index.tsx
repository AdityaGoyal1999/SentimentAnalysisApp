// import { DarkTheme } from '@react-navigation/native';
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { 
  Bars3Icon, 
  MagnifyingGlassIcon, 
  BellIcon 
} from "react-native-heroicons/outline";
import { BreakingNewsCards } from '@/components/BreakingNewsCards';
import { StrictMode } from 'react';

export default function HomeScreen() {
  return (
    <StrictMode>
      <SafeAreaView className="flex-1 bg-white">
        <StatusBar style="auto"/>

        {/* Header */}
        <View className="flex-row justify-between items-center px-4 py-3">
          <TouchableOpacity>
            <Bars3Icon size={24} color="#000000"/>
          </TouchableOpacity>
          
          <View className="flex-row gap-4">
            <TouchableOpacity>
              <MagnifyingGlassIcon size={24} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity>
              <BellIcon size={24} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Breaking News Section */}
        <BreakingNewsCards />
        
      </SafeAreaView>
    </StrictMode>
  );
}
