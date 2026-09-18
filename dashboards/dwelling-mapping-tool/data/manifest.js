// Manifest of TLAs that have a dwelling data file ready to load.
// To add a new area: run build_dwelling_data.py against a LINZ export cropped
// to that area, drop the resulting <TLA>.js file into this /data/ folder, and
// add an entry here (file path + record count for display purposes).
window.TLA_MANIFEST = {
  "Hauraki District": { file: "data/Hauraki_District.js", count: 11101 }
};
