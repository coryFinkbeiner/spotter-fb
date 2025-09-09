import React, { useMemo } from 'react'
import { useData } from '../DataProvider'

const FEATURE_META = [
  { key: 'acousticness', label: 'Acousticness', type: 'percent' },
  { key: 'danceability', label: 'Danceability', type: 'percent' },
  { key: 'energy', label: 'Energy', type: 'percent' },
  { key: 'instrumentalness', label: 'Instrumentalness', type: 'percent' },
  { key: 'liveness', label: 'Liveness', type: 'percent' },
  { key: 'speechiness', label: 'Speechiness', type: 'percent' },
  { key: 'valence', label: 'Valence (Positivity)', type: 'percent' },
  { key: 'popularity', label: 'Popularity', type: 'percent' }, // Spotify uses 0-100
  { key: 'tempo', label: 'Tempo (BPM)', type: 'bpm' },
  { key: 'duration', label: 'Duration (sec)', type: 'seconds' },
  { key: 'key', label: 'Musical Key', type: 'int', min: 0, max: 11 },
  { key: 'timeSignature', label: 'Time Signature', type: 'int', min: 3, max: 7 },
  { key: 'mode', label: 'Mode (0 minor, 1 major)', type: 'int', min: 0, max: 1 },
]

function SettingRow({ meta, value, onChange }) {
  // Normalize legacy ms values to seconds for display when switching units
  const normalizeUnit = (n) => {
    if (meta.type === 'seconds' && typeof n === 'number' && n > 600) {
      return Math.round(n / 1000)
    }
    return n
  }
  // Special UI for musical key: single-select chips 0–11 (C..B)
  if (meta.key === 'key') {
    const KEY_NAMES = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
    const selected = (value?.target !== undefined && value?.target !== null)
      ? value.target
      : (typeof value?.min === 'number' && value?.min === value?.max ? value.min : undefined)

    const setSelected = (k) => {
      if (selected === k) {
        onChange({ min: undefined, max: undefined, target: undefined })
      } else {
        onChange({ min: undefined, max: undefined, target: k })
      }
    }

    return (
      <div className="key-row">
        <div className="truncate" title={meta.label}>{meta.label}</div>
        <div className="key-group">
          {KEY_NAMES.map((name, idx) => (
            <button
              key={idx}
              type="button"
              className={`key-chip${selected === idx ? ' active' : ''}`}
              onClick={() => setSelected(idx)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    )
  }

  const ranges = useMemo(() => {
    switch (meta.type) {
      case 'percent':
        return { min: 0, max: 100, step: 1 }
      case 'bpm':
        return { min: 40, max: 220, step: 1 }
      case 'seconds':
        return { min: 10, max: 600, step: 1 } // 10s–10m
      case 'int':
        return { min: meta.min ?? 0, max: meta.max ?? 10, step: 1 }
      default:
        return { min: 0, max: 100, step: 1 }
    }
  }, [meta])

  const clamp = (n) => {
    if (n === undefined || n === null || n === '') return undefined
    const x = Number(n)
    return isNaN(x) ? undefined : Math.min(ranges.max, Math.max(ranges.min, x))
  }

  const curMin = (normalizeUnit(value?.min) ?? ranges.min)
  const curMax = (normalizeUnit(value?.max) ?? ranges.max)

  const handleMinInput = (n) => {
    const next = clamp(n)
    if (next === undefined) return onChange({ min: undefined, max: value?.max })
    const safe = Math.min(next, value?.max ?? ranges.max)
    onChange({ min: safe, max: value?.max ?? ranges.max })
  }

  const handleMaxInput = (n) => {
    const next = clamp(n)
    if (next === undefined) return onChange({ min: value?.min, max: undefined })
    const safe = Math.max(next, value?.min ?? ranges.min)
    onChange({ min: value?.min ?? ranges.min, max: safe })
  }

  const minPercent = ((curMin - ranges.min) / (ranges.max - ranges.min)) * 100
  const maxPercent = ((curMax - ranges.min) / (ranges.max - ranges.min)) * 100

  return (
    <div className="range-row">
      <div className="truncate" title={meta.label}>{meta.label}</div>

      <input
        type="number"
        min={ranges.min}
        max={ranges.max}
        step={ranges.step}
        value={value?.min !== undefined ? curMin : ''}
        onChange={(e) => handleMinInput(e.target.value)}
        placeholder={`${ranges.min}`}
        className="range-input"
      />

      <div className="dual-range">
        <div
          className="dual-range__fill"
          style={{ left: `${minPercent}%`, width: `${Math.max(0, maxPercent - minPercent)}%` }}
        />
        <input
          type="range"
          min={ranges.min}
          max={ranges.max}
          step={ranges.step}
          value={curMin}
          onChange={(e) => {
            const v = clamp(e.target.value)
            const safe = Math.min(v ?? ranges.min, value?.max ?? ranges.max)
            onChange({ min: safe, max: value?.max ?? ranges.max })
          }}
        />
        <input
          type="range"
          min={ranges.min}
          max={ranges.max}
          step={ranges.step}
          value={curMax}
          onChange={(e) => {
            const v = clamp(e.target.value)
            const safe = Math.max(v ?? ranges.max, value?.min ?? ranges.min)
            onChange({ min: value?.min ?? ranges.min, max: safe })
          }}
        />
      </div>

      <input
        type="number"
        min={ranges.min}
        max={ranges.max}
        step={ranges.step}
        value={value?.max !== undefined ? curMax : ''}
        onChange={(e) => handleMaxInput(e.target.value)}
        placeholder={`${ranges.max}`}
        className="range-input"
      />
    </div>
  )
}

function Settings() {
  const { mySettings, setMySettings, seeds } = useData()

  const setFeature = (key, patch) => {
    setMySettings(prev => ({ ...prev, [key]: { ...prev[key], ...patch } }))
  }

  const resetAll = () => {
    setMySettings({
      acousticness: { min: 0, max: 100, target: undefined },
      danceability: { min: 0, max: 100, target: undefined },
      duration: { min: undefined, max: undefined, target: undefined },
      energy: { min: 0, max: 100, target: undefined },
      instrumentalness: { min: 0, max: 100, target: undefined },
      key: { min: 0, max: 11, target: undefined },
      liveness: { min: 0, max: 100, target: undefined },
      loudness: { min: 0, max: 100, target: undefined },
      mode: { min: 0, max: 1, target: undefined },
      popularity: { min: 0, max: 100, target: undefined },
      speechiness: { min: 0, max: 100, target: undefined },
      tempo: { min: 60, max: 180, target: undefined },
      timeSignature: { min: 3, max: 7, target: undefined },
      valence: { min: 0, max: 100, target: undefined }
    })
  }

  const clearAll = () => {
    setMySettings(Object.fromEntries(Object.keys(mySettings).map(k => [k, { min: undefined, max: undefined, target: undefined }])))
  }

  return (
    <div className="panel" style={{ padding: 16, display: 'grid', gap: 12 }}>
      <div style={{ display: 'grid', gap: 10 }}>
        {FEATURE_META.map(meta => (
          <SettingRow
            key={meta.key}
            meta={meta}
            value={mySettings?.[meta.key]}
            onChange={(patch) => setFeature(meta.key, patch)}
          />
        ))}
      </div>
    </div>
  )
}

export default Settings
