import { getScreenCornerRadius } from 'expo-screen-corners';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const cornerRadius = getScreenCornerRadius();

export default function App() {
  return (
    <View style={styles.root}>
      {/* An overlay whose corners trace the physical display corners. */}
      <View
        pointerEvents="none"
        style={[styles.screenOutline, { borderRadius: cornerRadius }]}
      />
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>expo-screen-corners</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Display corner radius</Text>
          <Text style={styles.value}>{cornerRadius.toFixed(1)} pt</Text>
          <Text style={styles.platform}>
            {Platform.OS} · {cornerRadius > 0 ? 'detected natively' : 'not available'}
          </Text>
        </View>

        <Text style={styles.hint}>
          The pink outline is drawn with the reported radius on a device with
          rounded corners it should hug the screen edges exactly.
        </Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0b0b0f',
  },
  screenOutline: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 2,
    borderColor: '#ff4d8d',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  header: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 32,
  },
  card: {
    backgroundColor: '#17171f',
    borderRadius: 16,
    paddingVertical: 28,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  label: {
    color: '#9a9aa8',
    fontSize: 14,
  },
  value: {
    color: '#fff',
    fontSize: 44,
    fontWeight: '700',
    marginVertical: 8,
  },
  platform: {
    color: '#6a6a78',
    fontSize: 13,
  },
  hint: {
    color: '#8a8a98',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 32,
    lineHeight: 20,
  },
});
