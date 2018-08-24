<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-area ref="area" :area-list="$t('areaList')" />
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-area :area-list="$t('areaList')" :value="value" />
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-area :area-list="$t('areaList')" :columns-num="2" :title="$t('title')" />
    </demo-block>
  </demo-section>
</template>

<script>
import AreaList from '@/city';

export default {
  i18n: {
    'zh-CN': {
      title2: '选中省市县',
      title3: '配置显示列',
      areaList: AreaList
    }
  },

  data() {
    return {
      value: '330302'
    };
  }
};
</script>
