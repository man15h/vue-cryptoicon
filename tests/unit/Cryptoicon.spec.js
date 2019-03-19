import { mount, shallowMount } from '@vue/test-utils';
import { Cryptoicon } from '../../src/components';

let baseProps = {
  symbol: 'btc',
  color: 'red',
  size: 50
};
describe('Cryptoicon', () => {
  it('is called', () => {
    const wrapper = mount(Cryptoicon);
    expect(wrapper.name()).toBe('Cryptoicon');
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it('is rendered with props', () => {
    const wrapper = shallowMount(Cryptoicon, {
      propsData: baseProps
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.props().symbol).toBe(baseProps.symbol);
    expect(wrapper.props().color).toBe(baseProps.color);
    expect(wrapper.props().size).toBe(baseProps.size);
  });
});
