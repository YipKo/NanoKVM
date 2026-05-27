import { Modal } from 'antd';

export function confirmNetworkSave(t: (key: string) => string): Promise<boolean> {
  return new Promise((resolve) => {
    Modal.confirm({
      title: t('settings.network.warningTitle'),
      content: `${t('settings.network.warningDescription')}\n\n${t('settings.network.warningIpChange')}`,
      okText: t('settings.network.warningConfirm'),
      cancelText: t('settings.network.wifi.cancelBtn'),
      centered: true,
      onOk: () => resolve(true),
      onCancel: () => resolve(false)
    });
  });
}
