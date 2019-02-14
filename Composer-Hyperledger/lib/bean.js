/* global getAssetRegistry getFactory emit */

/**
 * Bean transaction processor function.
 * @param {org.example.basic.changeType} tx The Bean transaction instance.
 * @transaction
 */
async function changeType(tx) {  // eslint-disable-line no-unused-vars
    
    // Save the old value of the asset.
    const oldType = tx.asset.BeanType;
    
    // Update the asset with the new value.
    tx.asset.BeanType = tx.newType;
    
    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.example.basic.BeanBlock');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.asset);
    
    // Emit an event for the modified asset.
    let event = getFactory().newEvent('org.example.basic', 'changeTypeEvent');
    event.asset = tx.asset;
    event.oldType = oldType;
    event.newType = tx.newType;
    emit(event);
}

/**
 * Bean transaction processor function.
 * @param {org.example.basic.changeAmount} tx The Bean transaction instance.
 * @transaction
 */
async function changeAmount(tx) {  // eslint-disable-line no-unused-vars
    
    // Save the old value of the asset.
    const oldAmount = tx.asset.Amount;
    
    // Update the asset with the new value.
    tx.asset.Amount = tx.newAmount;
    
    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.example.basic.BeanBlock');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.asset);
    
    // Emit an event for the modified asset.
    let event = getFactory().newEvent('org.example.basic', 'changeAmountEvent');
    event.asset = tx.asset;
    event.oldAmount = oldAmount;
    event.newAmount = tx.newAmount;
    emit(event);
}

/**
 * Bean transaction processor function.
 * @param {org.example.basic.changeVerification} tx The Bean transaction instance.
 * @transaction
 */
async function changeVerification(tx) {  // eslint-disable-line no-unused-vars
    
    // Save the old value of the asset.
    const oldVerificationBit = tx.asset.VerificationBit;
    
    // Update the asset with the new value.
    tx.asset.VerificationBit = tx.newVerificationBit;
    
    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.example.basic.BeanBlock');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.asset);
    
    // Emit an event for the modified asset.
    let event = getFactory().newEvent('org.example.basic', 'changeVerificationEvent');
    event.asset = tx.asset;
    event.oldVerificationBit = oldVerificationBit;
    event.newVerificationBit = tx.newVerificationBit;
    emit(event);
}
