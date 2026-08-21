import { DataTable, Chip } from "@elmore/design-system";
export const CoreMetrics = () => (
  <DataTable>
    <thead>
      <tr><th scope="col">Metric</th><th scope="col" className="eg-num">Leaders n=42</th><th scope="col" className="eg-num">Being led n=201</th><th scope="col" className="eg-num">Gap</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Belonging importance, self</th><td className="eg-num">8.24</td><td className="eg-num">8.14</td><td className="eg-num">+0.10</td></tr>
      <tr><th scope="row">Rate belonging&rsquo;s importance 8+</th><td className="eg-num">76%</td><td className="eg-num">73%</td><td className="eg-num">+3 pts</td></tr>
      <tr className="is-highlighted">
        <th scope="row">Belonging Index</th>
        <td className="eg-num">62 <Chip tier="building">Building</Chip></td>
        <td className="eg-num">46 <Chip tier="at-risk">At-risk</Chip></td>
        <td className="eg-num">+16 pts</td>
      </tr>
      <tr><th scope="row">Leadership-level average score</th><td className="eg-num">3.96</td><td className="eg-num">3.67</td><td className="eg-num">+0.29</td></tr>
    </tbody>
  </DataTable>
);
