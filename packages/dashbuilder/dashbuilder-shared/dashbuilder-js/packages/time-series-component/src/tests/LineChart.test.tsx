/*
 * Copyright 2021 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";
import { LineChart } from "../LineChart";
import { shallow } from "enzyme";
import { options, series } from "../SampleData";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";

configure({ adapter: new Adapter() });

it("Should test LineChart component with different props", () => {
  const wrapper = shallow(<LineChart type={"line"} options={options} series={series} />);
  expect(wrapper.html()).toMatchSnapshot();
  wrapper.setProps({ type: "line", options, series });
  expect(wrapper.html()).toMatchSnapshot();
  wrapper.setProps({ type: "area", options, series });
  expect(wrapper.html()).toMatchSnapshot();
});
