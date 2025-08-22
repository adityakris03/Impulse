import { Group } from "@/types";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface GroupCardProps {
  group: Group;
  onPress: (groupId: string) => void;
  onToggleJoin: (groupId: string) => void;
}

export function GroupCard({ group, onPress, onToggleJoin }: GroupCardProps) {
  const formatMemberCount = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  // Function to determine if the color is light or dark
  const isLightColor = (color: string): boolean => {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6;
  };

  const isLight = isLightColor(group.color);

  return (
    <TouchableOpacity
      style={styles.groupCard}
      onPress={() => onPress(group.id)}
      activeOpacity={0.8}
    >
      <View style={[styles.colorBar, { backgroundColor: group.color }]} />
      <View style={styles.groupContent}>
        <View style={styles.groupHeader}>
          <Text style={styles.groupTitle}>{group.title}</Text>
          <View
            style={[styles.memberCount, isLight && styles.memberCountLight]}
          >
            <Text
              style={[
                styles.memberCountText,
                isLight && styles.memberCountTextLight,
              ]}
            >
              {formatMemberCount(group.memberCount)} members
            </Text>
          </View>
        </View>

        <Text style={styles.groupDescription} numberOfLines={2}>
          {group.description}
        </Text>

        <TouchableOpacity
          style={[styles.joinButton, group.isJoined && styles.leaveButton]}
          onPress={() => onToggleJoin(group.id)}
        >
          <Text
            style={[
              styles.joinButtonText,
              group.isJoined && styles.leaveButtonText,
            ]}
          >
            {group.isJoined ? "Leave Group" : "Join Group"}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  groupCard: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    overflow: "hidden",
  },
  colorBar: {
    height: 6,
    width: "100%",
  },
  groupContent: {
    padding: 20,
  },
  groupHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  groupTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2D3748",
    flex: 1,
    marginRight: 12,
  },
  memberCount: {
    backgroundColor: "rgba(102, 126, 234, 0.1)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  memberCountLight: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  memberCountText: {
    fontSize: 12,
    color: "#667eea",
    fontWeight: "600",
  },
  memberCountTextLight: {
    color: "#2D3748",
  },
  groupDescription: {
    fontSize: 14,
    color: "#718096",
    lineHeight: 20,
    marginBottom: 16,
  },
  joinButton: {
    backgroundColor: "#667eea",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  leaveButton: {
    backgroundColor: "rgba(237, 100, 166, 0.1)",
    borderWidth: 1,
    borderColor: "#ed64a6",
  },
  joinButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  leaveButtonText: {
    color: "#ed64a6",
  },
});
