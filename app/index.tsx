import { GroupCard } from "@/components/GroupCard";
import { mockGroups } from "@/services/mockData";
import { Group } from "@/types";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function FocusGroupsScreen() {
  const [groups, setGroups] = useState<Group[]>(mockGroups);
  const insets = useSafeAreaInsets();

  const toggleJoinGroup = (groupId: string) => {
    setGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === groupId ? { ...group, isJoined: !group.isJoined } : group
      )
    );
  };

  const navigateToGroup = (groupId: string) => {
    router.push(`/group/${groupId}`);
  };

  return (
    <LinearGradient
      colors={["#667eea", "#764ba2"]}
      style={[styles.gradient, { paddingTop: insets.top }]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 32 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Focus Groups</Text>
          <Text style={styles.subtitle}>
            Join communities that matter to you
          </Text>
        </View>

        <View style={styles.groupsContainer}>
          {groups.map((group) => (
            <GroupCard
              key={group.id}
              group={group}
              onPress={navigateToGroup}
              onToggleJoin={toggleJoinGroup}
            />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    fontFamily: "SpaceMono",
  },
  groupsContainer: {
    paddingHorizontal: 24,
  },
});
