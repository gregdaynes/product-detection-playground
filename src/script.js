import $ from 'jquery';
import { detectHandles, detectProductName, detectProductIds } from './lib/detect-targets';

detectHandles(['5-panel-hat', 'ayers-chambray', 'ayres-chambray', 'camp-stool', 'canvas-lunch-bag']);
detectHandles(['test-a', 'test-b']);

// detectProductName([{ handle: '5-panel-hat', name: '5 Panel Camp cap', productId: 1590171771774 }]);
detectProductIds([{ handle: '5-panel-hat', name: '5 Panel Camp cap', productId: 1590171771774 }]);

