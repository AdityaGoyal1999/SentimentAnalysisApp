
// export default Slot;
import { Tabs } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { HomeIcon, UserIcon, BookmarkIcon, BellIcon } from "react-native-heroicons/outline";

export default function AppLayout() {
  return (
    <Tabs screenOptions={({ route }) => ({
      tabBarStyle: { paddingBottom: 20, height: 80, paddingTop: 5 },
      tabBarActiveTintColor: '#0066FF',
      headerShown: false,
      tabBarLabel: () => null,
      tabBarButton: (props) => {
        
        const isActive = props.accessibilityState?.selected;
        return (
            <Pressable
                onPress={props.onPress}
                className="flex-1"
            >
                <View className="items-center justify-center h-full">
                    {isActive ? (
                        // Active tab with pill background
                        <View className="flex-row  bg-blue-100 p-8 rounded-full gap-2">
                            {props.children}
                        </View>
                    ) : (
                    // Inactive tab - icon only
                        props.children
                    )}
                </View>
            </Pressable>

        )
      }

    })}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: "Bookmarks",
          tabBarIcon: ({ color }) => <BookmarkIcon size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color }) => <BellIcon size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <UserIcon size={30} color={color} />,
        }}
      />
    </Tabs>
  );
}