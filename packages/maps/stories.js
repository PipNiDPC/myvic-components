import { storiesOf } from '@storybook/vue'
import SVicFreeWifiMap from './storybook-components/MapVicFreeWifi'
import SVicPreventionFamilyViolence from './TideMapPreventionFamilyViolence'

storiesOf('Molecules/Map', module)
  .add('Map with free wifi data', () => ({
    components: { SVicFreeWifiMap },
    template: `<s-vic-free-wifi-map />`
  }))
  .add('Map with family violence data', () => ({
    components: { SVicPreventionFamilyViolence },
    template: `<s-vic-previention-family-violence title="Title" description="Description" />`
  }))
