# Narrative beat sheet

One continuous scroll, one structure, no resets. `uProgress` (0→1) is measured
once from the `[data-narrative]` element and fed to both the renderer and CSS
(`--scene-progress`), so the visual world and the document can never disagree
about where the visitor is.

| Beat | Section | Formation | Camera | What it says |
|---|---|---|---|---|
| 00 | Hero | `fScatter` → `fLattice` | close, then slow dolly back | Fragments. Nothing is connected yet. |
| 01 | Opening statement | `fLattice` | wide, elevated | Order emerges. Digital is a system, not a page. |
| 02 | Services / Work | `fSlabs` | tracking, orbit reveal | The lattice resolves into surfaces — the things people see. |
| 03 | AI automation | `fNetwork` | push in, close | The structure starts moving work between its own parts. |
| 04 | Business software (**dark**) | `fDataGrid` | low, interior | Inside the business. The ledger, the floor, the stock position. |
| 05 | Trust / process / pricing | `fGrowth` | rise and pull back wide | The system extends past its own boundary. |
| 06 | Control point | `fResolve` | settle, square on | Everything compresses into one object that holds. Start the build. |

## Continuity rules

- Nodes are **staggered by seed** when crossing between formations, so the
  structure rebuilds rather than cross-fading. No two nodes arrive together.
- Activation sweeps ahead of scroll position (`nodeActivation`), so the
  structure lights up in the direction of travel.
- The dark beat inverts the renderer palette via `[data-scene="dark"]` and an
  IntersectionObserver — the structure crosses the boundary with the visitor
  instead of vanishing at it.
