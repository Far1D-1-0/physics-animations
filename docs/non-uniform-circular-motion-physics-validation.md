# Validación física: Movimiento Circular No Uniforme

Se revisaron completamente las especificaciones:

- `non-uniform-circular-motion-accelerating-disk-spec.md`
- `non-uniform-circular-motion-point-on-wheel-spec.md`
- `non-uniform-circular-motion-accelerating-fan-spec.md`

## Resultado de la auditoría

No se detectaron errores físicos ni algebraicos. Las relaciones usadas son correctas:

```latex
\omega_f=\omega_i+\alpha t
```

```latex
v=r\omega,\qquad a_t=r\alpha,\qquad a_c=\frac{v^2}{r}
```

```latex
a=\sqrt{a_t^2+a_c^2}
```

## Verificación numérica

| Escena | Valor exacto verificado | Valor mostrado |
| --- | ---: | ---: |
| Disco: aceleración total | `72.0277724214764 m/s²` | `72.03 m/s²` |
| Rueda: aceleración total | `25.6281095674262 m/s²` | `25.63 m/s²` |
| Ventilador: aceleración angular | `3.0 rad/s²` | `3.0 rad/s²` |
| Ventilador: velocidad tangencial | `5.1 m/s` | `5.1 m/s` |
| Ventilador: aceleración tangencial | `0.9 m/s²` | `0.90 m/s²` |
| Ventilador: aceleración centrípeta | `86.7 m/s²` | `86.7 m/s²` |

Los redondeos de las especificaciones son consistentes con las cifras significativas de los datos.
