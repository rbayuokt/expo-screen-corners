import { getScreenCornerRadius } from 'expo-screen-corners';
import { useState } from 'react';
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

const cornerRadius = getScreenCornerRadius();

const GAP = 12;
const imageRadius = Math.max(cornerRadius - GAP, 0);
const HARDCODED_RADIUS = 16;

const LANDSCAPE_URI =
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80';

export default function App() {
  const { height } = useWindowDimensions();
  const [usingLib, setUsingLib] = useState(true);

  const appliedRadius = usingLib ? imageRadius : HARDCODED_RADIUS;

  return (
    <View style={styles.root}>
      <Image
        source={{ uri: LANDSCAPE_URI }}
        resizeMode="cover"
        style={[
          styles.hero,
          {
            height: height * 0.3,
            margin: GAP,
            borderTopLeftRadius: appliedRadius,
            borderTopRightRadius: appliedRadius,
          },
        ]}
      />

      <View style={styles.toggle}>
        <ToggleButton
          label="Without lib"
          active={!usingLib}
          onPress={() => setUsingLib(false)}
        />
        <ToggleButton
          label="With lib"
          active={usingLib}
          onPress={() => setUsingLib(true)}
        />
      </View>

      <View style={styles.info}>
        {usingLib ? (
          <>
            <Text style={styles.title}>Concentric corners</Text>
            <Text style={styles.subtitle}>
              The image radius is derived from your device's physical screen
              radius.
            </Text>

            <View style={styles.formula}>
              <Stat label="Screen radius" value={cornerRadius} accent />
              <Text style={styles.op}>−</Text>
              <Stat label="Gap" value={GAP} />
              <Text style={styles.op}>=</Text>
              <Stat label="Image radius" value={imageRadius} accent />
            </View>

            <Text style={styles.platform}>
              {Platform.OS} ·{' '}
              {cornerRadius > 0 ? 'detected natively' : 'not available'}
            </Text>
          </>
        ) : (
          <>
            <Text style={styles.title}>Hardcoded radius</Text>
            <Text style={styles.subtitle}>
              Without the library the physical screen radius is unknown, so you
              guess a value that never quite nests inside the display.
            </Text>

            <View style={styles.formula}>
              <Stat label="Screen radius" value={NaN} />
              <Text style={styles.op}>≠</Text>
              <Stat label="Image radius" value={HARDCODED_RADIUS} />
            </View>

            <Text style={styles.platform}>{Platform.OS} · radius guessed</Text>
          </>
        )}
      </View>
    </View>
  );
}

function ToggleButton({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.toggleBtn, active && styles.toggleBtnActive]}
    >
      <Text style={[styles.toggleText, active && styles.toggleTextActive]}>
        {label}
      </Text>
    </Pressable>
  );
}

function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <View style={styles.stat}>
      <Text style={[styles.statValue, accent && styles.statValueAccent]}>
        {Number.isNaN(value) ? '?' : value.toFixed(0)}
      </Text>
      <Text style={styles.statUnit}>pt</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  hero: {
    alignSelf: 'stretch',
    backgroundColor: '#17171f',
  },
  info: {
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingTop: 24,
  },
  toggle: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#f0f0f3',
    borderRadius: 999,
    padding: 4,
    marginHorizontal: GAP,
    marginTop: 4,
    marginBottom: 8,
  },
  toggleBtn: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 999,
  },
  toggleBtnActive: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  toggleText: {
    color: '#9a9aa8',
    fontSize: 14,
    fontWeight: '600',
  },
  toggleTextActive: {
    color: '#0b0b0f',
  },
  title: {
    color: '#0b0b0f',
    fontSize: 22,
    fontWeight: '700',
  },
  subtitle: {
    color: '#6a6a78',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 28,
    lineHeight: 20,
  },
  formula: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  stat: {
    alignItems: 'center',
    minWidth: 84,
  },
  statValue: {
    color: '#17171f',
    fontSize: 40,
    fontWeight: '800',
    lineHeight: 44,
  },
  statValueAccent: {
    color: '#ff4d8d',
  },
  statUnit: {
    color: '#9a9aa8',
    fontSize: 12,
    fontWeight: '600',
    marginTop: -2,
  },
  statLabel: {
    color: '#6a6a78',
    fontSize: 12,
    marginTop: 6,
    textAlign: 'center',
  },
  op: {
    color: '#c4c4cc',
    fontSize: 28,
    fontWeight: '400',
    marginHorizontal: 10,
    marginTop: 6,
  },
  platform: {
    color: '#9a9aa8',
    fontSize: 13,
    marginTop: 32,
  },
});
